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

// player one button propmts name on click
function playerOne() {
    var name = prompt("What is your name");
    alert ('Welcome ' + name + ' You go first!' );
}

function playerTwo() {
    var name = prompt("What is your name");
    alert ('Welcome ' + name +  );
}


// -------------------------------------------------------------

// Start Game button functionality 

let start = document.getElementById('startGame');

function initialize() {
   
    start.style.display = 'none'
    
}

//-------------------------------------------------------

// Reset button functionality

function resetGame() {
    document.location.reload(true);
}
// ------------------------------------------------------



var a;

function hide() {
    if (a == 1){
        document.getElementById('header').style.display='inline';
        return a = 0;
    } else {
        document.getElementById('header').style.display='none';
        return a = 1;
    }
}
// let Player1 = {
//     constructor (name, click){
//         this.name = name;
//         this.click = click;
//     }

//     display() {
//         console.log()alert(`${this.name}` + ' goes first!')
//     }
// }

// display();

// class Player2 {
//     constructor (name, click){
//         this.name = name;
//         this.click = click;
//     }
// }

// let GameStart = {
//     gameStart: function(classType){
//         this.setPlayer(classType);
//     },
//     setPlayer: function(classType) {
//         switch (classType) {
//             case 'Player1':
//                 player1 = new Player1(classType);
//                 break;
//             case 'Player2':
//                 player2 = new Player2(classType);
//                 break;
                
//         }
//     }
// }

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
        
     for (var i = 0; i < 4; i++) {
         if(document.getElementById('option' + i).checked){ // if answer is checked
             var answer = document.getElementById('option' + i).value;
         } 
 }

//  Create conditions to check if answer choices are right or wrong

    if(randomQuestion == 0) { // question in array 0
         if(answers == 1){  // correct answer is choice in index 1
            document.getElementById('submit').innerHtml = alert('Correct');
         }else {
        document.getElementById('submit').innerHtml = alert('Wrong');
      }
    }

    if(randomQuestion == 1) {
            if(answers == 0){
                document.getElementById('results').innerHtml = alert('Correct');
            } else {
                document.getElementById('results').innerHtml = alert('Wrong');

        }
        }

    if(randomQuestion == 2) {
                if(answers == 2){
                    document.getElementById('results').innerHtml = alert('Correct');
                } else {
                    document.getElementById('results').innerHtml = alert('Wrong');
    
                }
                }

                if(randomQuestion == 3) {
                        if(answers == 3){
                            document.getElementById('results').innerHtml = alert('Correct');
                        } else {
                            document.getElementById('results').innerHtml = alert('Wrong');
                
                        }
                        }

                if(randomQuestion == 4) {
                    if(answers == 0){
                document.getElementById('results').innerHtml = alert('Correct');
                    } else {
                document.getElementById('results').innerHtml = alert('Wrong');
        
                        }
                        }

                if(randomQuestion == 5) {
                    if(answers == 2){
                document.getElementById('results').innerHtml = alert('Correct');
                    } else {
                document.getElementById('results').innerHtml = alert('Wrong');
            
                    }
                    }
    


}

// -----------------------------------------------

// function to switch turns and set win conditions
// let Player1 = 'Me'
// let Player2 = 'You'



// -----------------------------------------------------------





// https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp