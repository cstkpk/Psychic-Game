// Creates an array that lists out all of the possible choices for the computer
var computerChoice = ["a", "b", "c", "d", "e", "f"];

// We start the game with a score of 0
var score = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];


// Function that renders computer choice randomly from the options array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Function that updates the score
function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }

// Function that updates losses
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

// Function that updates guess left
function updateGuessesLeft() {
    document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
}

// Function that updates guesses used
function updateGuessesMade() {
    document.querySelector("#guesses-made").innerHTML = "So far you've guessed: " + guessesMade; 
}

// THE GAME

// Calling functions to start the game.
// renderChoice(); -- Don't need this?
updateScore();
updateLosses();
updateGuessesLeft();
updateGuessesMade();


// When the user presses a key, it will run the following function:
document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    if (userInput === computerChoice) {
        score++;
        updateScore();
    }
    else if (userInput != computerChoice) {
        guessesLeft--;
        updateGuessesLeft();
        var userText = document.querySelector("#guesses-made");
        document.onkeyup = function(even) {
            userText.textContent = event.key;
        };
        updateGuessesMade();
    }

}
