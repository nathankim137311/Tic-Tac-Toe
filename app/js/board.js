import gameFlow from "./flow.js"
import { player1, player2 } from './player.js';

let gameBoard = { 
  gameContainer: document.getElementById('game-container'), 
  grid: [],
  createBoard () {
      let i = this.grid.length; 
      while (i < 9) {
          const div = this.gameContainer.appendChild(document.createElement('div'));
          div.classList.add('square');
          this.grid.push(div); 
          i++;    
      }
    return this.grid; 
  },
  clickSquares () {
    // each square listens for a click event 
    let turn = gameFlow.whoGoesFirst(); 
    this.grid.forEach(square => square.addEventListener('click', (e) => {
      if (turn === player1) {
        e.target.classList.add('xshape');
        alert(`${turn}\'s turn!`);
        turn = player2; 
      } 
      if (turn === player2) { 
        e.target.classList.add('xshape');
        alert(`${turn}\'s turn!`);
        turn = player1; 
      } 
    }) 
   ); 
   return turn; 
  }
};

export default gameBoard 

