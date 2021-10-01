import gameFlow from './flow.js'
import gameBoard from './board.js'
import promptName from './player.js'

// creates gameboard
gameBoard.createBoard();
gameBoard.clickSquares();
promptName(); 
gameFlow.whoGoesFirst(); 
// creates the players 