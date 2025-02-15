$(document).ready(function(){
    $('#track-name').text('Loading...');
    $('#track-artist').text('Loading...');
    changePlaying();
});

async function getCurrentPlaying() {
    let type = 'application/json';
    let url = 'http://localhost:3000/playing';
    var music;
    var artist;
    var progress;
    var duration;
    var playing;

    await $.ajax({
        url: url,
        headers: { 'Content-Type' : type },
        type: "GET",
        success: function(data) {
            music = data['response']['music'];
            artist = data['response']['artist'];
            progress = data['response']['progress'];
            duration = data['response']['duration'];
            image = data['response']['image'];
            playing = data['response']['playing'];

            console.log(data);
        },
        error: async function(data) {
            console.log('error');
            console.log(data);
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
            
            console.log(data);
    
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
        }, 400);
    }
    myLoop();
}

function secondsToMinutes(millis) {
    const time = millis/1000;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}