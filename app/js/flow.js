import giveName from './player.js'

let players = giveName(); 
let player1 = players[0];
let player2 = players[1]; 

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
      alert(player1.name + 'goes first!');
    } else {
      player2.shape = 'x'; 
      player2.turnOrder = 1; 
      player1.shape = 'o';
      player1.turnOrder = 2;  
      alert(player2.name + 'goes first!');
    }
    return [player1, player2];
  },
}

export default gameFlow
 