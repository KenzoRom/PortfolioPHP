//De convert variabele zorgt ervoor dat de ingevulde nummers van string naar int worden geconvert zodat we daar een berekening mee kunnen doen.//

document.querySelector('.calculate').addEventListener("click", (e) => {
    const playerXPos = document.querySelector('#xPlayer').value;
        playerXPosConvert = parseInt(playerXPos);
    const playerYPos = document.querySelector('#yPlayer').value;
        playerYPosConvert = parseInt(playerYPos);
    const playerStartDegrees = document.querySelector('#startDegrees').value;
        playerStartDegreesConvert = parseInt(playerStartDegrees);
    const enemyXPos = document.querySelector('#xEnemy').value;
        enemyXPosConvert = parseInt(enemyXPos);
    const enemyYPos = document.querySelector('#yEnemy').value;
        enemyYPosConvert = parseInt(enemyYPos);
        const setGlobalToLocalX = enemyXPosConvert - playerXPosConvert;
        const setGlobalToLocalY = enemyYPosConvert - playerYPosConvert;
        const degreePlayerEnemy = Math.atan2(setGlobalToLocalX, setGlobalToLocalY) * (180 / Math.PI);
        var totalDegrees = 0 - degreePlayerEnemy;
        alert((totalDegrees + 180) - playerStartDegreesConvert);
        let rot = document.querySelector(".rot");
        rot.style.transform = "rotate("+(totalDegrees + 180) + "deg)";
})

/*Deze 3 eventlisteners zorgen ervoor dat de positie van de player + rotation en enemy geset kan worden*/
document.querySelector('.set-enemy-pos').addEventListener("click", (e) => {
    const enemyXPos = document.querySelector('#xEnemy').value;
        enemyXPosConvert = parseInt(enemyXPos);
    const enemyYPos = document.querySelector('#yEnemy').value;
        enemyYPosConvert = parseInt(enemyYPos);
        let xEnemy = enemyXPosConvert * 78;
        let yEnemy = enemyYPosConvert * 78;
        let enemy = document.querySelector(".enemy");
    if(enemy){
        enemy.style.top = yEnemy + "px";
        enemy.style.left = xEnemy + "px";
     }
})

document.querySelector('.set-player-pos').addEventListener("click", (e) => { 
    const playerXPos = document.querySelector('#xPlayer').value;
        playerXPosConvert = parseInt(playerXPos);
    const playerYPos = document.querySelector('#yPlayer').value;
        playerYPosConvert = parseInt(playerYPos);
        let xPlayer = playerXPosConvert * 78;
        let yPlayer = playerYPosConvert * 78;
        let player = document.querySelector(".player");
    if(player){
        player.style.top = yPlayer + "px";
        player.style.left = xPlayer + "px";
    }
})

document.querySelector('.set-player-rot').addEventListener("click", (e) => { 
    const playerStartDegrees = document.querySelector('#startDegrees').value;
        playerStartDegreesConvert = parseInt(playerStartDegrees);
    const playerXPos = document.querySelector('#xPlayer').value;
        playerXPosConvert = parseInt(playerXPos);
    const playerYPos = document.querySelector('#yPlayer').value;
        playerYPosConvert = parseInt(playerYPos);
        let xPlayer = playerXPosConvert * 76;
        let yPlayer = playerYPosConvert * 76; 
        let rot = document.querySelector(".rot");
    if(rot){
        rot.style.top = yPlayer + "px";
        rot.style.left = xPlayer + "px";
        rot.style.transform = "rotate(" + playerStartDegrees + "deg)";
    }
})

//Debug loop
/*function debugLoop(){
    for(let i = 0; i < 3; i++){
        console.log(playerStartDegreesConvert);
        console.log(degreePlayerEnemy);
        console.log(totalDegrees);
    }
}*/