
let players = {
  promptName () { // stores and displays names 
    let name1 = prompt('enter your name'); 
    let name2 = prompt('enter your friend\'s name');
    return [`${name1}`, `${name2}`];  
  }
}

export const namesArr = players.promptName();
export let player1 = '' + namesArr[0];
export let player2 = '' + namesArr[1];

console.log(player1); 
console.log(player2);

export default players 