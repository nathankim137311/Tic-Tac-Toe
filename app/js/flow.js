import giveName from './player.js'
import gameBoard from './board.js'
import displayController from './display.js';

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
  checkForThree () { // checks for three in a row of any shape class on the grid 
    // 'x' wins
    // winning row conditions 
    const grid = gameBoard.grid;
    if (grid[0].classList.contains('xshape') && grid[1].classList.contains('xshape') && grid[2].classList.contains('xshape')) {
      // whoever has 'x' property has won 
      this.scorePoints(); 
    } else if (grid[3].classList.contains('xshape') && grid[4].classList.contains('xshape') && grid[5].classList.contains('xshape')) {
      this.scorePoints(); 
    } else if (grid[6].classList.contains('xshape') && grid[7].classList.contains('xshape') && grid[8].classList.contains('xshape')) {
      this.scorePoints(); 
    }
    // winning column conditions
    if (grid[0].classList.contains('xshape') && grid[3].classList.contains('xshape') && grid[6].classList.contains('xshape')) {
      this.scorePoints(); 
    } else if (grid[1].classList.contains('xshape') && grid[4].classList.contains('xshape') && grid[7].classList.contains('xshape')) {
      this.scorePoints(); 
    } else if (grid[2].classList.contains('xshape') && grid[5].classList.contains('xshape') && grid[8].classList.contains('xshape')) {
      this.scorePoints(); 
    }
    // winning diagonal conditions 
    if (grid[0].classList.contains('xshape') && grid[4].classList.contains('xshape') && grid[8].classList.contains('xshape')) {
      this.scorePoints(); 
    } else if (grid[2].classList.contains('xshape') && grid[4].classList.contains('xshape') && grid[6].classList.contains('xshape')) {
      this.scorePoints(); 
    }
    // 'o' wins
    // winning row conditions 
    if (grid[0].classList.contains('oshape') && grid[1].classList.contains('oshape') && grid[2].classList.contains('oshape')) {
      // whoever has 'o' property has won 
      this.scorePoints(); 
    } else if (grid[3].classList.contains('oshape') && grid[4].classList.contains('oshape') && grid[5].classList.contains('oshape')) {
      this.scorePoints(); 
    } else if (grid[6].classList.contains('oshape') && grid[7].classList.contains('oshape') && grid[8].classList.contains('oshape')) {
      this.scorePoints(); 
    }
    // winning column conditions
    if (grid[0].classList.contains('oshape') && grid[3].classList.contains('oshape') && grid[6].classList.contains('oshape')) {
      this.scorePoints(); 
    } else if (grid[1].classList.contains('oshape') && grid[4].classList.contains('oshape') && grid[7].classList.contains('oshape')) {
      this.scorePoints(); 
    } else if (grid[2].classList.contains('oshape') && grid[5].classList.contains('oshape') && grid[8].classList.contains('oshape')) {
      this.scorePoints(); 
    }
    // winning diagonal conditions 
    if (grid[0].classList.contains('oshape') && grid[4].classList.contains('oshape') && grid[8].classList.contains('oshape')) {
      this.scorePoints(); 
    } else if (grid[2].classList.contains('oshape') && grid[4].classList.contains('oshape') && grid[6].classList.contains('oshape')) {
      this.scorePoints();
    }
  }, 
  scorePoints () {
    if (player1.shape === 'x') {
      displayController.whoseTurn.textContent = `${player1.name} has won!`; 
      alert(`${player1.name} has won!`)
      player1.score++;
      displayController.displayScore();
    } else if (player2.shape === 'x') {
      displayController.whoseTurn.textContent = `${player2.name} has won!`; 
      alert(`${player2.name} has won!`)
      player2.score++;
      displayController.displayScore();
    };
    gameBoard.clearBoard(); 
    whoseTurn.textContent = ''; 
  },
  draw () { // if the game ends in a draw 
    displayController.whoseTurn.textContent = 'It\'s a tie!'; 
    alert('It\'s a tie!');
  },
  checkForWinner () {
    if (player1.score === 3) { // first to 3 wins the game 
      displayController.whoseTurn.textContent = `Congratulations ${player1.name} you win!`; 
      alert(`Congratulations ${player1.name} you have won the game!`);
    } else if (player2.score === 3) {
      displayController.whoseTurn.textContent = `Congratulations ${player2.name} you win!`; 
      alert(`Congratulations ${player2.name} you have won the game!`);
    }
    displayController.clearDisplay(); 
  }
}

export default gameFlow
 