import { player1 } from './flow.js'; 
import { player2 } from './flow.js';

const display = document.getElementById('display');
const player1Display = document.getElementById('player1');
//player1Display.textContent = `${player1.name}:` + ' ' + '0';
const player2Display = document.getElementById('player2');
//player2Display.textContent = `${player2.name}:` + ' ' + '0';
const whoseTurn = document.getElementById('turn');

let displayController = {
    whoseTurn,
    player1Display,
    player2Display, 
    displayScore () {
        player1Display.textContent = `${player1.name}:` + ' ' + `${player1.score}`; 
        player2Display.textContent = `${player2.name}:` + ' ' + `${player2.score}`; 
    },
    clearDisplay () {
        whoseTurn.textContent = ''; 
        player1Display.textContent = '';
        player2Display.textContent = ''; 
    }
}

export default displayController

