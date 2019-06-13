// Creates an array that lists out all of the possible choices for the computer
var choices = ["a", "b", "c", "d", "e", "f"];

// We start the game with the following stats:
var score = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];


// Function that renders computer choice randomly from the options array
var computerChoice = choices[Math.floor(Math.random() * choices.length)];
// Let's see what the computer's choice is
console.log("Computer chooses: " + computerChoice);
    // Delete this later (don't actually want to show the computer's choice) -- Right now this doesn't work
    function showComputerChoice() {
        document.querySelector("#computer-choice").innerHTML = "Computer choice: " + computerChoice;
    }

// Function that updates the score
function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }

// Function that updates losses
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

// Function that updates guesses left
function updateGuessesLeft() {
    document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
}

// Function that updates guesses used
function updateGuessesMade() {
    document.querySelector("#guesses-made").innerHTML = "So far you've guessed: " + guessesMade; 
}

// THE GAME

// Calling functions to start the game.
updateScore();
updateLosses();
updateGuessesLeft();
updateGuessesMade();
showComputerChoice();


// When the user presses a key, it will run the following function:
document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();

    // Let's see what the computer is seeing when we assign the event to a variable
    console.log("User Choice: " + userInput);

    // Logic
    if (userInput === computerChoice) {
        console.log("It's a match!");
        score++;
        console.log("Score: " + score);
        updateScore();
        // Need something to make computer choose again (on a loop) 
    
    }
    else if (userInput != computerChoice) {
        console.log("No match");
        console.log("Score: " + score);
        guessesLeft--;
        console.log("Guess left: " + guessLeft) // Right now, this works once and then jumps to -1
        updateGuessesLeft(); // Same as above
        updateGuessesMade(); // How to write this function?
        
        // If guesses left runs down to 0, add 1 to losses
        if (guessesLeft = 0) {
            losses++;
            console.log("You lose...");
            updateLosses();
        }
    }

};
