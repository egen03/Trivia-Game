console.log('working')

// Psuedo Code

// Javascript

// 1. Create functionality for buttons (player one, player two, play again)
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

// player one button propmts name on click. Will tell player they go first.

function playerOne() {
    var name = prompt("What is your name");
    alert ('Welcome ' + name + '.' + ' You go first!' );
}

// player two button will ask for your name

function playerTwo() {
    var name = prompt("What is your name");
    alert ('Welcome ' + name + '.' + ' Player One goes first.' );
}


// -------------------------------------------------------------

// Start Game button functionality 

let start = document.getElementById('startGame');

function initialize() {
   
    start.style.display = 'none'
    document.getElementById('quiz').style.display = 'none';
        document.getElementById('answers').style.display = 'none';
}

//-------------------------------------------------------

// Reset button functionality

function resetGame() {
    loadQuestion();

}
// ------------------------------------------------------

// var a;

// function hide() {
//     if (a == 1){
//         document.getElementById('header').style.display='inline';
//         return a = 0;
//     } else {
//         document.getElementById('header').style.display='none';
//         return a = 1;
//     }
// }


// .quiz hide onload
// .answer hide on load
// .score hide on load
// play again show after last question


// function hideQuiz() {
//     if(document.getElementById('start').clicked ){
//         document.getElementById('quiz').style.display = 'none';
//     } else {
//         document.getElementById('quiz').style.display = 'block';
//     }
// }



// ------------------------------------------------------

// Create questions. Use array for creating multiple questions as an object.

var questions = [
    'Question: What does Hakuna Matata mean?', // 0 (Index values- helpful when determining which question i will randomly load)
    'Question: How many Muses are in Hercules?', // 1
    'Question: Who is the fashion designer in The Incredibles?', // 2
    'Question: Which Full House character voices Aladdin?', // 3
    'Question: What name does Mulan pick for herself while pretending to be a man?', // 4
    'Question: What is the name of Prince Eric’s dog in The Little Mermaid?' // 5
]

var answers = [
    ['No Problem', // 0 (index values- helpful when determining which answer is the correct choice)
    'No Worries', // 1
    'No Trouble', // 2
    'No Drama'],  // 3


    ['Five', // 0
    'Eight', // 1
    'Three', // 2
    'Six'], // 3


    ['Edna Mose', // 0
    'Mrs. Incredible', // 1
    'Edna Mode', // 2
    'Edna Mule'], // 3


    ['Kimmy', // 0
    'D.J.', // 1
    'Stephanie', // 2
    'Steve'], // 3


    ['Ping', // 0
    'Lee', // 1
    'Mushu', // 2
    'Poe'], // 3


    ['Sebastian', // 0
    'Scuttles', // 1
    'Max', // 2
    'Flounder'] // 3
];


var score = 0;

// ------------------------------------------------------

// Create a function to be able to show questions randomly. Use math.random

var randomQuestion = 0; //Define outside of loadquestion function so i can use it in choice function

function loadQuestion() {
    randomQuestion = Math.floor(Math.random() * questions.length);
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
        
     for (var i = 0; i < 4; i++) {
         if(document.getElementById('option' + i).checked){ // if answer is checked
             var answers = i; //document.getElementById('option' + i).value
         } 
 }

//  Create conditions to check if answer choices are right or wrong

    if(randomQuestion == 0) { // question in array 0
         if(answers == 1){  // correct answer is choice in index 1
            document.getElementById('submit').innerHtml = alert('Correct');
            score++;
         }else {
        document.getElementById('submit').innerHtml = alert('Wrong');
      }
    }

    if(randomQuestion == 1) {
            if(answers == 0){
                document.getElementById('submit').innerHtml = alert('Correct');
                score++;
            } else {
                document.getElementById('submit').innerHtml = alert('Wrong');

        }
        }

    if(randomQuestion == 2) {
                if(answers == 2){
                    document.getElementById('submit').innerHtml = alert('Correct');
                    score++;
                } else {
                    document.getElementById('submit').innerHtml = alert('Wrong');
    
                }
                }

                if(randomQuestion == 3) {
                        if(answers == 3){
                            document.getElementById('submit').innerHtml = alert('Correct');
                            score++;
                        } else {
                            document.getElementById('submit').innerHtml = alert('Wrong');
                
                        }
                        }

                if(randomQuestion == 4) {
                    if(answers == 0){
                        document.getElementById('submit').innerHtml = alert('Correct');
                        score++;
                    } else {
                        document.getElementById('submit').innerHtml = alert('Wrong');
        
                        }
                        }

                if(randomQuestion == 5) {
                    if(answers == 2){
                        document.getElementById('submit').innerHtml = alert('Correct');
                        score++;
                    } else {
                        document.getElementById('submit').innerHtml = alert('Wrong');
            
                    }
                    }
                    
                    document.getElementById('results').innerText = `Score:  ${score}`;


}

// -----------------------------------------------

// Score



// -----------------------------------------------------------




// =========================RESOURCES===========================

// https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp

// https://stackoverflow.com/questions/37287093/starting-a-javascript-prompt-after-a-button-is-clicked/37287126