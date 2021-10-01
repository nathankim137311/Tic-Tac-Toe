import gameBoard from './board.js'
import { player1, player2 } from './player.js'
import createPlayer from './player.js'

let gameFlow = {
  rounds: 5,
  turns: 0, // turns end if someone wins the round 
  whoGoesFirst () { // determines which player goes first
    let coin = Math.floor(Math.random() * 2);
    if (coin === 0) {
      alert(`${player2} goes first`);
      return coin = player1;
    } else if (coin === 1) {
      alert(`${player1} goes first!`);
      return coin = player2;   
    }
  },
  determineShape () {
    turn = this.whoGoesFirst(); 
    if (turn === player1) {
      player = turn; 
      shape = 'x'; 
      createPlayer(player, shape); 
    } 
    if (turn === player2) {
      player = turn;  
      shape = 'o';
      createPlayer(player, shape);
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

export default gameFlow