import Player from "./Player.js";
console.log("JS Loaded!");
//Variables
const boxOne = document.querySelector('.field1');
const boxTwo = document.querySelector('.field2');
const boxThree = document.querySelector('.field3');
const boxFour = document.querySelector('.field4');
const boxFive = document.querySelector('.field5');
const boxSix = document.querySelector('.field6');
const boxSeven = document.querySelector('.field7');
const boxEight = document.querySelector('.field8');
const boxNine = document.querySelector('.field9');
const resetButton = document.querySelector('.reset-btn')
let playerOnePointLabel = document.querySelector('.points-player-one');
let playerTwoPointLabel = document.querySelector('.points-player-two');
const namePlayerOne = document.querySelector('.name-player-one');
const namePlayerTwo = document.querySelector('.name-player-two')
const playerOneSymbol = "O";
const playerTwoSymbol = "X";
let fieldNumber = 0;
let currentPlayer = 0;
let gameState = 0;
let boxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];

//Players
let playerOne = new Player(namePlayerOne, playerOneSymbol);
let playerTwo = new Player(namePlayerTwo, playerTwoSymbol);

//EventListeners
boxOne.addEventListener("click", (e)=> {
    fieldNumber = 1;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

boxTwo.addEventListener("click", (e)=> {
    fieldNumber = 2;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

boxThree.addEventListener("click", (e)=> {
    fieldNumber = 3;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

boxFour.addEventListener("click", (e)=> {
    fieldNumber = 4;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

boxFive.addEventListener("click", (e)=> {
    fieldNumber = 5;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

boxSix.addEventListener("click", (e)=> {
    fieldNumber = 6;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

boxSeven.addEventListener("click", (e)=> {
    fieldNumber = 7;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

boxEight.addEventListener("click", (e)=> {
    fieldNumber = 8;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

boxNine.addEventListener("click", (e)=> {
    fieldNumber = 9;
    setSymbol();
    changePlayerTurn();
    checkWin();
    updateGameState();
});

resetButton.addEventListener("click", (e)=> {
    resetPoints();
});

//Functions
function changePlayerTurn() {
    currentPlayer++;
    if(currentPlayer > 1) {
        currentPlayer = 0;
    };
}

function updateGameState() {
    gameState++;
    if(gameState == 9) {
        alert('Draw!');
        gameState = 0;
        resetGame();
    }
}
function setSymbol(el) {
        el.innerHTML = "<span class = 'symbol-on-field'>"+players[currentPlayer].symbol+"</span>";
   
}

function resetGame() {
    for(let i = 0; i < 10; i++){
        boxes[i].innerHTML = "";
    };
}

function addPointsPlayerOne() {
    playerOne.points + 1;
    playerOnePointLabel.innerHTML = playerOne.points;
    gameState = 0;
    resetGame();
}

function addPointsPlayerTwo() {
    playerTwo.points + 1;
    playerTwoPointLabel.innerHTML = playerTwo.points;
    gameState = 0;
    resetGame();
}

function resetPoints() {
    playerOne.points = 0;
    playerTwo.points = 0;
    playerOnePointLabel.innerHTML = "0";
    playerTwoPointLabel.innerHTML = "0";

}

//Win Condition
function checkWin() {
    if(boxes[0].textContent == "X" && boxes[1].textContent == "X" && boxes[2].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[3].textContent == "X" && boxes[4].textContent == "X" && boxes[5].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[6].textContent == "X" && boxes[7].textContent == "X" && boxes[8].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[0].textContent == "X" && boxes[3].textContent == "X" && boxes[6].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[1].textContent == "X" && boxes[4].textContent == "X" && boxes[7].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[4].textContent == "X" && boxes[5].textContent == "X" && boxes[8].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[0].textContent == "X" && boxes[4].textContent == "X" && boxes[8].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[2].textContent == "X" && boxes[4].textContent == "X" && boxes[6].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[2].textContent == "X" && boxes[5].textContent == "X" && boxes[8].textContent == "X") {alert("Win!"); addPointsPlayerOne()}
    else if(boxes[0].textContent == "O" && boxes[1].textContent == "O" && boxes[2].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
    else if(boxes[3].textContent == "O" && boxes[4].textContent == "O" && boxes[5].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
    else if(boxes[6].textContent == "O" && boxes[7].textContent == "O" && boxes[8].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
    else if(boxes[0].textContent == "O" && boxes[3].textContent == "O" && boxes[6].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
    else if(boxes[1].textContent == "O" && boxes[4].textContent == "O" && boxes[7].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
    else if(boxes[4].textContent == "O" && boxes[5].textContent == "O" && boxes[8].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
    else if(boxes[0].textContent == "O" && boxes[4].textContent == "O" && boxes[8].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
    else if(boxes[2].textContent == "O" && boxes[4].textContent == "O" && boxes[6].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
    else if(boxes[2].textContent == "O" && boxes[5].textContent == "O" && boxes[8].textContent == "O") {alert("Win!"); addPointsPlayerTwo()}
}