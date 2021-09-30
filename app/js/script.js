console.log('hello everyone'); 

let gameBoard = { 
    gameContainer: document.getElementById('game-container'), 
    grid: [],
    createBoard () {
        let i = this.grid.length; 
        while (i < 9) {
            const div = this.gameContainer.appendChild(document.createElement('div'));
            div.classList.add('square');
            this.grid.push(div); 
            i++;    
        } 
        // each square listens for a click event 
        this.grid.forEach(square => square.addEventListener('click', (e) => {
            e.target.classList.add('expand'); 
            }) 
        ); 
        return this.grid; 
    }
};

console.log(gameBoard.createBoard());





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