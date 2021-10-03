import gameFlow from './flow.js'
import gameBoard from './board.js'

const startBtn = document.createElement('button'); 
const resetBtn = document.createElement('button'); 
const btnContainer = document.getElementById('buttons'); 
btnContainer.appendChild(startBtn); 
btnContainer.appendChild(resetBtn); 
startBtn.innerHTML = 'start'; 
resetBtn.innerHTML = 'reset'; 

resetBtn.addEventListener('click', () => {
    window.location.reload();
});

startBtn.addEventListener('click', () => {
    startGame();
});

function startGame () {
    // creates gameboard
    gameBoard.createBoard();
    gameBoard.clickSquares();
    gameFlow.whoGoesFirst(); 
    gameFlow.checkForWinner();
}