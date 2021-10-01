import gameBoard from './board.js';

let players = {
  promptName () { // stores and displays names 
    let name1 = prompt('enter your name'); 
    let name2 = prompt('enter your friend\'s name');
    return [`${name1}`, `${name2}`];  
  },
  CreatePlayer (name, shape, turnOrder, score) {
    let player = {
      name: name,
      shape: shape,
      turnOrder: turnOrder,
      score: score
    }
    return player
  }
}

export default players 
export const namesArr = players.promptName();
export const player1 = players.CreatePlayer(namesArr[0]);
export const player2 = players.CreatePlayer(namesArr[1]);

console.log(player1.firstName);