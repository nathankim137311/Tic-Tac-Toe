
export default function promptName () { // prompts for two users' names and stores the names in an array
  let name1 = prompt('enter your name');
  let name2 = prompt('enter your friend\'s name'); 
  return [name1, name2]; 
}

export function createPlayer(name, shape, turnOrder, score) { // function that creates player objects
     return {
       name,
       shape,
       turnOrder,
       score
     }
}
  
export const namesArr = promptName();
export let name1 = namesArr[0];
export let name2 = namesArr[1];
export let player1 = createPlayer(`${name1}`, '', '', 0);
export let player2 = createPlayer(`${name2}`, '', '', 0); 