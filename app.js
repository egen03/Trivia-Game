console.log('working')

// Psuedo Code

// Javascript

// 1. Create functionality for buttons
// 2. Create questions.
//      - 3. Use array to store quiz questions
//      - 4. Use math.floor to load questions in random order
// 5. Create answers.
//      - 6. Used nested arrays to store answers.

// 1. Create classes for Player 1, Player 2, answering questions right or wrong*, next question
// 2. Create methods for getting question right or wrong.
// 3. Create loops for multiple choice conditions
// 4. Create way to log results to keep score
// 5. Create way to alternate between players
// 6. Create way to reset game/

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
// function answer1() {
//     let answer = alert('right')
//     document.getElementById('a').innerHTML = answer;
    
// }

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

var questions = [
    'Question: What does Hakuna Matata mean?',
    'Question: How many Muses are in Hercules?',
    'Question: Who is the fashion designer in The Incredibles?',
    'Question: Which Full House character voices Aladdin?',
    'Question: What name does Mulan pick for herself while pretending to be a man?',
    'Question: What is the name of Prince Eric’s dog in The Little Mermaid?'
]

// Create a function to be able to load question. Use math.random

var randomQuestion = 0;

function loadQuestion() {
    let randomQuestion = Math.floor(Math.random() * questions.length);
    document.getElementById('questions').innerHTML = questions[randomQuestion];

    for (var i = 0; i < 4; i++) {
        document.getElementById('answer1' + i).innerHTML = answers[randomQuestion][i];
    }
}


// call function

loadQuestion(); 
//--------------------------------------------------------------

// Answers

var answers = [
    'No Problem', 'No Worries', 'No Trouble', 'No Drama',
    'Five', 'Eight', 'Three', 'Six'
    'Edna Mose', 'Mrs. Incredible', 'Edna Mode', ''
];

function Answers() {
    var randomAnswer = Math.floor(Math.random() * (answers.length));
    document.getElementById('answerA').innerHTML = answers[randomAnswer];
    
}

// ----------------------------------------

function check() {
    var 
}

// answers();
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

// class Player1 {
//     constructor() {

//     }

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
//     switchTurns() {}

// }

// -----------------------------------------------------------


// Class for Player 2

// class Player2 {
//     constructor() {

//     }

// // method to choose answer
//     chooseAnswer() {

//     }
// }
// --------------------------------------------------------

// how i will switch turns:

// let player1Turn

// function switchTurns() {
//     player1Turn = !player1Turn
    
// }


