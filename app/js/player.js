
export default function giveName () { // prompts for two users' names and stores the names in an array
  let name1 = prompt('enter your name');
  let name2 = prompt('enter your friend\'s name'); 
  let player1 = createPlayer(`${name1}`, '', 0);
  let player2 = createPlayer(`${name2}`, '', 0); 
  return [player1, player2]; 
}

export function createPlayer(name, shape, score) { // function that creates player objects
     return {
       name,
       shape,
       score
     }
}
