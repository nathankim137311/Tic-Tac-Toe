import { player1 } from './flow.js'; 
import { player2 } from './flow.js';
import gameFlow from './flow.js'

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
    let turns = 0; 
    this.grid.forEach(square => square.addEventListener('click', (e) => {
      // first player uses 'x' second player uses 'o';
      if (player1.shape === 'x' && turns == 0 || player2.shape === 'x' && turns == 0) { // turn this into switch statement maybe?
        e.target.classList.add('xshape'); 
        if (player1.shape === 'x') {
          alert(`${player2.name}\'s turn!`); 
          turns = 1;
        } else {
          alert(`${player1.name}\'s turn!`);
          turns = 1;
        }
      } else if (turns == 1) {
        e.target.classList.add('oshape'); 
        turns = 0; 
        if (player1.shape === 'o') {
          alert(`${player2.name}\'s turn!`);
          turns = 0;
        } else {
          alert(`${player1.name}\'s turn!`);
          turns = 0;
        }
      }
      gameFlow.checkForThree(); 
    }) 
   );  
  }
};

export default gameBoard 

