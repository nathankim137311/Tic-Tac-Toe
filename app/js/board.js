import gameFlow from './flow.js';

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
      if (first.shape && turn % 2 == 0) {
        e.target.classList.add('xshape');
        alert(`${first.name}\'s turn!`); 
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

