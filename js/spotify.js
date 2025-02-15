const clientEncoded = 'YOUR_CLIENT_ENCODED'; // PLACEHOLDER. Put your Spotify Client Encoded (client_id:client_secret)

const authCode = 'YOUR_SPOTIFY_AUTH_CODE'; // PLACEHOLDER. Put your Spotify Auth Code

var auth = '';
var refreshToken = '';

// var auth = 'Bearer '+getCookie('spotifyAuth');
// if(getCookie('spotifyAuth') == ""){
//     async function e() {
//         await refreshAuthToken();
//     }
//     e();
// }

// var refreshToken = getCookie('spotifyRefresh');
// if(refreshToken == ""){refreshToken = 'PUT_YOUR_REFRESH_TOKEN'}

async function getAuthToken() {
    let url = 'https://accounts.spotify.com/api/token';

    await $.ajax({
        url: url,
        type: 'POST',
        headers: { 'Authorization' : 'Basic '+clientEncoded },
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        data: { grant_type:'authorization_code', code:authCode, redirect_uri:'http://127.0.0.1' },
        success: function(data) {
            console.log(data);
            auth = 'Bearer '+data['access_token'];
            setCookie('spotifyAuth', data['access_token']);

            refreshToken = data['refresh_token'];
            setCookie('refreshAuthToken', data['refresh_token']);
        },
        error: function(data) {
            console.log(data);
        }
    });
}

async function refreshAuthToken() {
    let url = 'https://accounts.spotify.com/api/token';

    await $.ajax({
        url: url,
        type: 'POST',
        headers: { 'Authorization' : 'Basic '+clientEncoded },
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        data: { grant_type:'refresh_token', code:authCode, refresh_token:refreshToken },
        success: function(data) {
            auth = 'Bearer '+data['access_token'];
            setCookie('spotifyAuth', data['access_token']);
        },
        error: function(data) {
            console.log(data);
            if(data['status']==400) {
                getAuthToken();
            }
        }
    });
}


$(document).ready(function(){
    $('#track-name').text('Loading...');
    $('#track-artist').text('Loading...');
    changePlaying();
});

async function getCurrentPlaying() {
    let type = 'application/json';
    let url = 'https://api.spotify.com/v1/me/player/currently-playing';
    var music;
    var artist;
    var progress;
    var duration;
    var playing;

    await $.ajax({
        url: url,
        headers: { 'Accept' : type, 'Content-Type' : type, 'Authorization' : auth },
        type: "GET",
        success: function(data) {
            music = data['item']['name'];
            artist = data['item']['artists'];
            progress = data['progress_ms'];
            duration = data['item']['duration_ms'];
            image = data['item']['album']['images'][0]['url'];
            playing = data['is_playing'];

            console.log(data);
        },
        error: async function(data) {
            if(data['status']==401) {
                await refreshAuthToken();
                changePlaying();
            }
        }
    });

    return {
        'music' : music,
        'artist' : artist,
        'progress' : progress,
        'duration' : duration,
        'image' : image,
        'playing' : playing
    }
}

function changePlaying() {
    var progress = 0;
    var duration = 0;
    function myLoop() {
        setTimeout(async function(){
            let music = '';
            let artist = '';
            let artistArray;
            let playing = false;
            progress;
            duration;
            
            let data = await getCurrentPlaying();
    
            music = data['music'];
            artistArray = data['artist'];
            progress = data['progress'];
            duration = data['duration'];
            image = data['image'];
            playing = data['playing'];
    
            if(artistArray.length > 1) {
                for(i=0; i<artistArray.length; i++) {
                    if(i < (artistArray.length-1)) {
                        if(i==0) {
                            artist += artistArray[i]['name']+' /';
                        } else  {
                            artist += ' '+artistArray[i]['name']+' /';
                        }
                    } else {
                        artist += ' '+artistArray[i]['name'];
                    }
                }
            } else {
                artist = artistArray[0]['name'];
            }
    
            $('#track-name').text(music);
            $('#track-artist').text(artist);
            document.getElementById('image').src=image;
            $('#duration').text(secondsToMinutes(duration));
            $('#progress').text(secondsToMinutes(progress));
            document.getElementById('track-range').max=duration;
            document.getElementById('track-range').value=progress;

            var val = ($('#track-range').val() - $('#track-range').attr('min')) / ($('#track-range').attr('max') - $('#track-range').attr('min'));
            
            $('#track-range').css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #C6C6C6), '
                + 'color-stop(' + val + ', #3F3F3F)'
                + ')'
            );

            if(playing) {
                document.getElementById('play-pause').src='./assets/icons/pause.png';
            } else {
                document.getElementById('play-pause').src='./assets/icons/play.png';
            }

            myLoop();
        }, 800);
    }
    myLoop();
}

function secondsToMinutes(millis) {
    const time = millis/1000;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}