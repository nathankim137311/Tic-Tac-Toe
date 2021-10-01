import name1 from './player.js'
import name2 from './player.js'
import { player1 } from './player.js'
import { player2 } from './player.js'

let gameFlow = {
  rounds: 5,
  turns: 0, 
  whoGoesFirst () { // determines which player goes first
    let first = Math.floor(Math.random() * 2);
    if (first === 0) {
      player1.shape = 'x'; 
      player1.turnOrder = 1;
      player2.shape = 'o';
      player2.turnOrder = 2;  
      alert(`${name1} goes first!`);
    } else {
      player2.shape = 'x'; 
      player2.turnOrder = 1; 
      player1.shape = 'o';
      player1.turnOrder = 2;  
      alert(`${name2} goes first!`);
    }
  },
}

export default gameFlow
 