// Creates an array that lists out all of the possible choices for the computer
var choices = ["a", "b", "c", "d", "e", "f"];

// We start the game with the following stats:
var score = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

// I just want to track the score to start
console.log("Score: " + score);

// Function that renders computer choice randomly from the options array
var computerChoice = choices[Math.floor(Math.random() * choices.length)];
// Let's see what that choice is
console.log("Computer Choose: " + computerChoice);

// When the user presses a key, it will run the following function:
document.onkeyup = function(event) {

    var userInput = event.key.toLowerCase();
    // Let's see what the computer is seeing when we assign the event to a variable
    console.log("User Choice: " + userInput);

    // Basic Logic Time
    if (userInput === computerChoice) {
        console.log("MATCH!");
        score++;
        console.log("Score: " + score);
    } else if (userInput != computerChoice) {
        console.log("No MATCH!");
        console.log("Score: " + score);
        guessesLeft--;
        console.log("Guesses left " + guessesLeft); // This works once and then goes to -1
    }

        
    // If guesses left runs down to 0, add 1 to losses
    if (guessesLeft = 0) {
        losses++;
        console.log("You Lose!");
    }

};
