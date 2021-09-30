
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
    this.grid.forEach(square => square.addEventListener('click', (e) => {
      // if it's player one's turn add player one's shape
      // if it's computer's turn add computer's shape  
      
      // e.target.classList.add('xshape'); 
      // e.target.classList.add('oshape'); 
       }) 
     ); 
     return this.grid; 
  }
};

export default gameBoard 

