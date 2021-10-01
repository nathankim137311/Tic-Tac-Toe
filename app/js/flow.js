import gameBoard from './board.js'
import { player1, player2 } from './player.js'
import createPlayer from './player.js'

let gameFlow = {
  rounds: 5,
  turns: 0, // turns end if someone wins the round 
  whoGoesFirst () { // determines which player goes first
    let first = Math.floor(Math.random() * 2);
    let second = null; 
    if (first === 0) {
      alert(`${player2} goes first!`);
      first = new createPlayer(player2, 'x', second, 0);
      second = new createPlayer(player1, 'x', first, 0);  
    } 
    if (first === 1) {
      alert(`${player1} goes first!`);
      first = new createPlayer(player1, 'x', first, 0); 
      second = new createPlayer(player2, 'x', second, 0); 
    } 
    return [first, second]; 
  },
  determineShape () { 
    if (this.turn === player1) {
      player = this.turn; 
      shape = 'x'; 
      return createPlayer(player, shape); 
    } 
    if (this.turn === player2) {
      player = turn;  
      shape = 'o';
      return createPlayer(player, shape);
    } 
  }
}

export default gameFlow


/*
console.log(gameFlow.determineShape());
export default gameFlow

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
*/