function getMatchId(){
    var delayTime = 0;
    var matchID = 0;

    function myLoop() {
        setTimeout(async function(){
            const status = await playerStatus();
                console.log(status);
                if(status[0]['status'] == 1) {
                    console.log('Tá no lobby!');
                    delayTime = 120000;
                } else if(status[0]['status'] == 2) {
                    console.log('Selecionando campeão!');
                    delayTime = 60000;
                } else if(status[0]['status'] == 3) {
                    console.log('Em jogo!');
                    delayTime = 300000;
                    let newMatchID = status[0]['Match'];
                    if(newMatchID == matchID) {
                        console.log('Mesma partida');
                    } else {
                        matchID = newMatchID;
                        getChampion(newMatchID);
                        console.log(newMatchID);
                    }
                } else if(status[0]['status'] == 0) {
                    console.log('Offline!');
                    delayTime = 600000;
                }
                else {
                    console.log('sei n');
                    console.log(status);
                    delayTime = 60000;
                }
            myLoop();
        }, delayTime);
    }
    myLoop();
}

$(document).ready( function(){
    getMatchId();
});
