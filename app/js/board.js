import gameFlow from './flow.js';
const [first, second] = gameFlow.whoGoesFirst(); 
let turn = 0; 

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
    this.grid.forEach(square => square.addEventListener('click', (e) => {
      // first player uses 'x' second player uses 'o'; 
      if (first && turn % 2 == 0) {
        e.target.classList.add('xshape');
        alert(`${first}\'s turn!`); 
        turn++;
      } else if (second && turn % 2 != 0) {
        e.target.classList.add('oshape');
        alert(`${second}\'s turn!`);
        turn++; 
      }
    }) 
   );  
  }
};

export default gameBoard 

