import gameBoard from './board.js'
import players from './player.js'
import gameFlow from './flow.js'

console.log(gameFlow.whoGoesFirst());
// gameBoard.createBoard();
// gameBoard.clickSquares(); 







// don't have to make a bunch of person objects like the nathan object below
/*
let nathan = {
    firstName: 'Nathan',
    lastName: 'Kim',
    getFullName() {
        return this.firstName + ' ' + this.lastName; 
    }
};
*/
// if you want to make more objects with the same properties as the nathan object
/*
function createPerson(firstName, lastName) {
    return {
        firstName, 
        lastName,
        getFullName() {
            return firstName + ' ' + lastName; 
        }
    }
}
*/
// can create any number of person objects
/*
let nathan = createPerson('Nathan', 'Kim'), 
    david = createPerson('David', 'Kim'); 

console.log(nathan.getFullName());
console.log(david.getFullName()); 
*/
// the Object.create() method 

// the reason why people use factory functions is because they don't want to duplicate code 
/*
function createPerson(player) {
    return {
        player

    }
}
*/