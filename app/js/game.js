import gameFlow from './flow.js'
import gameBoard from './board.js'

// creates gameboard
gameBoard.createBoard();
gameBoard.clickSquares();
gameFlow.whoGoesFirst(); 
console.log(gameBoard.grid);
// creates the players 