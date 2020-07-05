console.log('working')

// Psuedo Code

// Javascript

// 1. Create functionality for buttons
// 2. Create questions.
//      - 3. Use loop to go thru questions

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

// Start Game button functionality 

let start = document.getElementById('start');

function initialize() {
   
    start.style.display = 'none'
    
}
// -----------------------------------------------------------------------------

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

//-------------------------------------------------------
// Reset button functionality

function resetGame() {
    document.location.reload(true);
}
// ------------------------------------------------------

// Create questions. Use array for creating multiple questions as an object.

// let questions = [
//     {
//         question1: 'What is 1 + 1 ?'
//     },
//     {
//         question2: 'What is 2 + 2 ?'
//     },
//     {
//         question3: 'What is 3 + 3 ?'
//     }
// ],

// // Create ability to keep score
// let score = 0;

// // use for loop to loop thru questions.

// for (let i=0; i < questions.length; i++){
//     let answer = ;
//     if(answer == ) {
//         score ++;
//         alert ('Correct!');
//     }else {
//         alert('Try Again!');
//     }
// }
















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

questions [
    {
        Question: What does Hakuna Matata mean?
        Answer: No worries.
    },
    {
        Question: How many Muses are in Hercules?
        Answer: Five.
    },
    {
        Question: Who is the fashion designer in The Incredibles?
        Answer: Edna Mode.
    },
    {
        Question: Which Full House character voices Aladdin?
        Answer: Steve.
    },
    {
        Question: What name does Mulan pick for herself while pretending to be a man?
        Answer: Ping.
    }
]