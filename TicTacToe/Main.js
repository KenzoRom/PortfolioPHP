import Player from "./Player.js";
/*Variables*/
const board = document.querySelector('.board');
const resetButton = document.querySelector('.reset-btn');
const boxes = document.querySelectorAll('.field');
const playerOneButton = document.querySelector('.submit-player-one');
const playerTwoButton = document.querySelector('.submit-player-two');
let playerOnePointLabel = document.querySelector('.points-player-one');
let playerTwoPointLabel = document.querySelector('.points-player-two');
let currentPlayer = 0;
let gameState = 0;

//Player array
let players = [];
/*EventListeners*/

//Checks what field you have clicked and execute a turn
board.addEventListener("click", (e) => {
    //Checks if there are enough players to start the game
    if(players.length == 2){
        //Player One
        if(currentPlayer == 0){
            if(e.target.textContent === players[0].symbol || e.target.textContent === players[1].symbol){
                alert('Field already taken');
            }
            else{
                e.target.textContent = players[0].symbol;
                checkWin();
                updateGameState();
                changePlayerTurn();
            }
        }
        //Player Two
        else{
            if(e.target.textContent === players[0].symbol || e.target.textContent === players[1].symbol){
                alert('Field already taken');
            }
            else{
                e.target.textContent = players[1].symbol;
                checkWin();
                updateGameState();
                changePlayerTurn();
            }
        }
    }
    else{
        alert("You need to set your symbols, dummy!")
    }
})

//Reset points button
resetButton.addEventListener("click", (e)=> {
    resetPoints();
});

//Submit player symbol button
playerOneButton.addEventListener("click", (e) => {
    const playerOneSymbol = document.querySelector('#symbol-player-one-field').value;
    let playerOne = new Player(playerOneSymbol, playerOnePointLabel);
    players.push(playerOne);
})

playerTwoButton.addEventListener("click", (e) => {
    const playerTwoSymbol = document.querySelector('#symbol-player-two-field').value;
    let playerTwo = new Player(playerTwoSymbol, playerTwoPointLabel);
    players.push(playerTwo);
})

/*Functions*/
function changePlayerTurn() {
    currentPlayer++;
    if(currentPlayer > 1) {
        currentPlayer = 0;
    };
}

//Updates the game state and checks for draw.
function updateGameState() {
    gameState++;
    if(gameState == 9) {
        alert('Draw!');
        gameState = 0;
        resetGame();
    }
}

//Resets the game after the wincondition or reset button gets clicked.
function resetGame() {
    for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = "";
    };
}

//Resets the current point standing.
function resetPoints() {
        for(let i = 0; i < 3; i++){
        players[i].points = 0;
        players[i].winStreak = 0;
        players[i].label.textContent = "0";
        }
}

//Win Condition
function checkWin() {
        if(boxes[0].textContent == players[currentPlayer].symbol && boxes[1].textContent == players[currentPlayer].symbol && boxes[2].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            resetGame();
            alert("Win!");
        }
        else if(boxes[3].textContent == players[currentPlayer].symbol && boxes[4].textContent == players[currentPlayer].symbol && boxes[5].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            resetGame();
        }
        else if(boxes[6].textContent == players[currentPlayer].symbol && boxes[7].textContent == players[currentPlayer].symbol && boxes[8].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            alert("Win!");
            resetGame();
        }
        else if(boxes[0].textContent == players[currentPlayer].symbol && boxes[3].textContent == players[currentPlayer].symbol && boxes[6].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            alert("Win!");
            resetGame();
        }
        else if(boxes[1].textContent == players[currentPlayer].symbol && boxes[4].textContent == players[currentPlayer].symbol && boxes[7].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            alert("Win!");
            resetGame();
        }
        else if(boxes[4].textContent == players[currentPlayer].symbol && boxes[5].textContent == players[currentPlayer].symbol && boxes[8].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            alert("Win!");
            resetGame();
        }
        else if(boxes[0].textContent == players[currentPlayer].symbol && boxes[4].textContent == players[currentPlayer].symbol && boxes[8].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            alert("Win!");
            resetGame();
        }
        else if(boxes[2].textContent == players[currentPlayer].symbol && boxes[4].textContent == players[currentPlayer].symbol && boxes[6].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            alert("Win!");
            resetGame();
        }
        else if(boxes[2].textContent == players[currentPlayer].symbol && boxes[5].textContent == players[currentPlayer].symbol && boxes[8].textContent == players[currentPlayer].symbol) {
            players[currentPlayer].addPoints();
            gameState = -1;
            alert("Win!");
            resetGame();
        }
}

console.log("JS Loaded!");