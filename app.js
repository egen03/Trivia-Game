console.log('working')

// Psuedo Code

// Javascript

// 1. Create classes for Player 1, Player 2, answering questions right or wrong*, next question
// 2. Create methods for getting question right or wrong.
// 3. Create loops for multiple choice conditions
// 4. Create way to log results to keep score
// 5. Create way to alternate between players
// 6. Create way to reset game

// HTML

// 1. Create layout gameboard using grid
// 2. Insert buttons
// 3. Insert theme music

// CSS

// 1. Design buttons with hover effect
// 2. Animate right and wrong choice selections


// ----------------------------------------------------------------------------------

// Button functionality
function answer1() {
    let answer = alert('right')
    document.getElementById('a').innerHTML = answer;
    
}

function answer2() {
    let answer = alert('wrong')
    document.getElementById('a').innerHTML = answer;
    
}

function answer3() {
    let answer = alert('wrong')
    document.getElementById('a').innerHTML = answer;
    
}

function answer4() {
    let answer = alert('wrong')
    document.getElementById('a').innerHTML = answer;
    
}

// ------------------------------------------------------

// Reset button functionality

function resetGame() {
    document.location.reload(true);
}
// ------------------------------------------------------

// Classes for Player 1 

class Player1 {
    constructor() {

    }

// method to choose answer
    // selectAnswer () {
    //     if (answer === true) {
    //         return correct;
    //     } else {
    //         return wrong;
    //     }
    // }

// method to click answer
    // function clickEvent() {
    //     let answer = 'true'
    //     document.getElementById('a').innerHTML = alert('Correct');
        
    // }

//  method to switch turns
    switchTurns() {}

}

// -----------------------------------------------------------


// Class for Player 2

class Player2 {
    constructor() {

    }

// method to choose answer
    chooseAnswer() {

    }
}
// --------------------------------------------------------

// how i will switch turns:

let player1Turn

function switchTurns() {
    player1Turn = !player1Turn
    
}

// funcion resetGame() {
//     location.reload();
// }

