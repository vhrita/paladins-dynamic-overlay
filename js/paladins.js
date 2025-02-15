const baseUrl = "https://api.paladins.com/paladinsapi.svc";
const devId = 1234; // 1234 is a PLACEHOLDER. You need to put your PaladinsAPI DevID
const apiKey = 'YOUR_PALADINS_API_KEY'; // PLACEHOLDER. You need to put your PaladinsAPI Key
var nickname = '2901953'; // The player's PaladinsAPI ID (not the in-game name) - 2901953 = my ID - You need to put yours, or the ID of the player you want to track

var sessionID = getCookie("sessionID");
if(sessionID == "") { sessionID = "09944FD30A9044BC9EF782259C4E4D9D" }

$(document).ready(function(){
    let signature = generateSignature('testsession');
    let method = 'testsessionJson';
    let url = baseUrl+"/"+method+"/"+devId+"/"+signature[0]+"/"+sessionID+"/"+signature[1];
    $.get(url, async function(data){
        if(data.includes('Invalid session id')) {
            console.log('Id inválido.');
            await generateSessionID();
        } else if(data.includes('This was a successful')) {
            console.log('Id ainda válido: '+sessionID);
        } else {
            console.log('Saída desconhecida ao verificar ID.');
            console.log(data);
        }
    });
});

function generateSignature(method) {
    var m = new Date();
    var timestamp =
        m.getUTCFullYear() +
        ("0" + (m.getUTCMonth()+1)).slice(-2) +
        ("0" + m.getUTCDate()).slice(-2) +
        ("0" + m.getUTCHours()).slice(-2) +
        ("0" + m.getUTCMinutes()).slice(-2) +
        ("0" + m.getUTCSeconds()).slice(-2);
    
    var signature = md5(`${devId}${method}${apiKey}${timestamp}`);

    return [signature,timestamp];
}

function generateSessionID() {
    let signature = generateSignature('createsession');
    let method = 'createsessionJson';
    let url = baseUrl+"/"+method+"/"+devId+"/"+signature[0]+"/"+signature[1];

    return new Promise(resolve => {
        setTimeout(() => {
            $.get(url, function(data){
                if(data['ret_msg'] == 'Approved') {
                    sessionID = data['session_id'];
                    setCookie('sessionID', data['session_id']);
                }
                resolve(console.log(sessionID));
            });
        }, 500);
    });
}

function playerStatus() {
    let signature = generateSignature('getplayerstatus');
    let method = 'getplayerstatusJson';
    let url = baseUrl+"/"+method+"/"+devId+"/"+signature[0]+"/"+sessionID+"/"+signature[1]+"/"+nickname;
    
    return new Promise(resolve => {
        $.get(url, async function(data){
            let ret = data[0]['ret_msg'];

            if(ret == "Invalid session id.") {
                await generateSessionID();
                teste();
            } else if(ret == null) {
                resolve(data);
            } else {
                console.log('Error');
                resolve('Error');
            }
        });
    });
}

function getChampion(match) {
    let signature = generateSignature('getmatchplayerdetails');
    let method = 'getmatchplayerdetailsJson';
    let url = baseUrl+"/"+method+"/"+devId+"/"+signature[0]+"/"+sessionID+"/"+signature[1]+"/"+match;

    $.get(url, async function(data){
        let ret = data[0]['ret_msg'];

        if(ret == "Invalid session id.") {
            await generateSessionID();
            getChampion(match);
        } else if(ret == null) {
            console.log(data);
            for(i=0; i<data.length; i++){
                if(data[i]['playerId'] == nickname){
                    let champion = data[i]['ChampionName'];
                    console.log(champion);
                    changeOverlay(champion);
                }
            }
        } else {
            console.log('Erro ao adquirir champion!');
            console.log(ret);
        }
    });
}