import giveName from './player.js'

export let players = giveName(); 
export let player1 = players[0];
export let player2 = players[1]; 

let gameFlow = {
  whoGoesFirst () { // determines which player goes first
    let first = Math.floor(Math.random() * 2);
    if (first === 0) {
      player1.shape = 'x'; 
      player2.shape = 'o'; 
      alert(player1.name + ' ' + 'goes first!');
    } else {
      player2.shape = 'x'; 
      player1.shape = 'o'; 
      alert(player2.name + ' ' + 'goes first!');
    }
    return [player1, player2];
  },
}

export default gameFlow
 