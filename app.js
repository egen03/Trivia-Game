console.log('working')

// Psuedo Code

// Javascript

// 1. Create functionality for buttons
// 2. Create questions.
//      - 3. Use array to store quiz questions
//      - 4. Use math.floor to load questions in random order
// 5. Create answers.
//      - 6. Used for loop to generate random answer options
// 7. Submit answers to keep score.

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


// -------------------------------------------------------------

// Start Game button functionality 

let start = document.getElementById('start');

function initialize() {
   
    start.style.display = 'none'
    
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

var answers = [
    ['No Problem', 'No Worries', 'No Trouble', 'No Drama'],
    ['Five', 'Eight', 'Three', 'Six'],
    ['Edna Mose', 'Mrs. Incredible', 'Edna Mode', 'Edna Mule'],
    ['Kimmy', 'D.J.', 'Stephanie', 'Steve'],
    ['Ping', 'Lee', 'Mushu', 'Poe'],
    ['Sebastian', 'Scuttles', 'Max', 'Flounder']
];

// ------------------------------------------------------

// Create a function to be able to show questions randomly. Use math.random

var randomQuestion = 0; //Define outside of loadquestion function so i can use it in choice function

function loadQuestion() {
    let randomQuestion = Math.floor(Math.random() * questions.length);
    document.getElementById('questions').innerHTML = questions[randomQuestion];

// Create loop to generate random answer options of the questions array

    for (var i = 0; i < 4; i++) {
        document.getElementById('answer'+i).innerHTML = answers[randomQuestion][i];
    }
}

// call function

loadQuestion(); 
//--------------------------------------------------------------

// Submit answer choice. See which choice is checked using .checked keyterm

function choice() {
     for (var i = 0; i < 5; i++) {
         if(document.getElementById('answer' + i).checked){ // if answer is checked
             var answer = document.getElementById('answer' + i).value;
         } 
 }

//  Create conditions to check if answer choices are right or wrong

         if(randomQuestion === 0) { // question in array 0
             if(answers === 1){  // correct answer is choice in index 1
             document.getElementById('results').innerHtml = alert('Correct')
         } else {
            document.getElementById('results').innerHtml = alert('Wrong');

        }
        }

        if(randomQuestion === 1) {
            if(answers === 0){
                document.getElementById('results').innerHtml = alert('Correct');
            } else {
                document.getElementById('results').innerHtml = alert('Wrong');

        }
        }

        if(randomQuestion === 2) {
            if(answers === 2){
                document.getElementById('results').innerHtml = alert('Correct')
            } else {
                document.getElementById('results').innerHtml = alert('Wrong')

            }
            }
        if(randomQuestion === 3) {
            if(answers === 3){
                document.getElementById('results').innerHtml = alert('Correct')
            } else {
                document.getElementById('results').innerHtml = alert('Wrong')
    
            }
            }
        if(randomQuestion === 4) {
            if(answers === 0){
                document.getElementById('results').innerHtml = alert('Correct')
            } else {
                document.getElementById('results').innerHtml = alert('Wrong')
        
            }
            }

        if(randomQuestion === 5) {
            if(answers === 2){
                document.getElementById('results').innerHtml = alert('Correct')
            } else {
                document.getElementById('results').innerHtml = alert('Wrong')
            
            }
            }

}

















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



https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp