import gameBoard from './board.js'
import namesArr from './player.js'
import player1 from './player.js'
import player2 from './player.js'

let gameFlow = {
  rounds: 5,
  turns: 9, 
  whoGoesFirst () {
    let coin = Math.floor(Math.random() * 2);
    if (coin === 1) {
      return `${player1} goes first!`; 
    } else if (coin === 2) {
      return `${player2} goes first!`;
    }
  },
  createTurns () {
    for(let i = 0; i < this.turns; i++) {

    }
  },
  createRounds () { // creates five rounds 
    for(let i = 0; i < this.rounds; i++) {
      this.createTurns();  
    }
  },
  clearPrevious () { // removes X's and O's from the gameboard
    gameBoard.grid.forEach(square => {
      square.classList.remove('xshape', 'oshape'); 
    });
  },
  getScore () { // scoring and tally up points  

  },
  getResult () {

  }, 
  determineWinner () {

  }
}

gameFlow.whoGoesFirst();

export default gameFlow