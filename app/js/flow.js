import giveName from './player.js'
import gameBoard from './board.js'

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
  checkForThree () {
    // checks for three in a row of any shape class on the grid 
    // winning row conditions 
    const grid = gameBoard.grid;
    if (grid[0].classList.contains('xshape') && grid[1].classList.contains('xshape') && grid[2].classList.contains('xshape')) {
      // whoever has 'x' property has won 
      if (player1.shape === 'x') {
        alert(player1.name + ' ' + "has won!");
      } else {
        alert(player2.name + ' ' + "has won!");
      };
    } else if (grid[3].classList.contains('xshape') && grid[4].classList.contains('xshape') && grid[5].classList.contains('xshape')) {
      if (player1.shape === 'x') {
        alert(player1.name + ' ' + "has won!");
      } else {
        alert(player2.name + ' ' + "has won!");
      };
    } else if (grid[6].classList.contains('xshape') && grid[7].classList.contains('xshape') && grid[8].classList.contains('xshape')) {
      alert(player1.name + ' ' + "has won!");
    }
    // winning column conditions
    if (grid[0].classList.contains('xshape') && grid[3].classList.contains('xshape') && grid[6].classList.contains('xshape')) {
      if (player1.shape === 'x') {
        alert(player1.name + ' ' + "has won!");
      } else {
        alert(player2.name + ' ' + "has won!");
      };
    } else if (grid[1].classList.contains('xshape') && grid[4].classList.contains('xshape') && grid[7].classList.contains('xshape')) {
      if (player1.shape === 'x') {
        alert(player1.name + ' ' + "has won!");
      } else {
        alert(player2.name + ' ' + "has won!");
      };
    } else if (grid[2].classList.contains('xshape') && grid[5].classList.contains('xshape') && grid[8].classList.contains('xshape')) {
      if (player1.shape === 'x') {
        alert(player1.name + ' ' + "has won!");
      } else {
        alert(player2.name + ' ' + "has won!");
      };
    }
    // winning diagonal conditions 
    if (grid[0].classList.contains('xshape') && grid[4].classList.contains('xshape') && grid[8].classList.contains('xshape')) {
      if (player1.shape === 'x') {
        alert(player1.name + ' ' + "has won!");
      } else {
        alert(player2.name + ' ' + "has won!");
      }
      } else if (grid[2].classList.contains('xshape') && grid[4].classList.contains('xshape') && grid[6].classList.contains('xshape')) {
        if (player1.shape === 'x') {
          alert(player1.name + ' ' + "has won!");
        } else {
          alert(player2.name + ' ' + "has won!");
        }
      }
  }
}

export default gameFlow
 