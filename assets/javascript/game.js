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
    // Delete this later (don't actually want to show the computer's choice)
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

// Function that updates guesses made
function updateGuessesMade() {
    document.querySelector("#guesses-made").innerHTML = "So far you've guessed: " + guessesMade; 
}

// Function that creates a new computer choice randomly from the options array
// function newComputerChoice() {
//     this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
//     newComputerChoice = computerChoice + newComputerChoice;
//     document.querySelector("#computer-choice").innerHTML = "Computer choice " + computerChocie;
// }

    function newComputerChoice() {
        this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
        console.log("New Computer Choice is: " + computerChoice);
        
        
    }

// function newComputerChoice() {
//     choices[Math.floor(Math.random() * choices.length)];
//     document.querySelector("#computer-choice").innerHTML = "Computer choice: " + computerChoice;
// }

// This isn't working -- why?
// function newComputerChoice() {
//     computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     console.log("Computer chooses: " + computerChoice);
// }

// Function that resets the stats (other than score and losses, which accumulate through all rounds of the game)
var reset = function() {
    guessesLeft = 9;
    guessesMade = [];
    updateGuessesLeft();
    updateGuessesMade();
    newComputerChoice();
    // computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // newComputerChoice = computerChoice + newComputerChoice;
}

// THE GAME

// Calling functions to start the game
updateScore();
updateLosses();
updateGuessesLeft();
updateGuessesMade();
showComputerChoice();
// newComputerChoice();


// When the user presses a key, it will run the following function:
document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();

    // Let's see what the computer is seeing when we assign the event to a variable
    console.log("User Choice: " + userInput);
    console.log("User type: " + typeof(userInput));

    // Logic
    if (userInput === computerChoice) {
        console.log("It's a match!");
        score++;
        console.log("Score: " + score);
        updateScore();
        reset();
    
    }
    else if (userInput !== computerChoice) {
        console.log("No match");
        console.log("Score: " + score);
        
        // If there are still more guesses left, continue counting down until guesses left reaches 0
        guessesLeft--;
        console.log("Guesses left: " + guessesLeft);
        updateGuessesLeft(); 
        
        // Add the guessed letter to the list of guesses made -- below is not correct
        guessesMade.push(userInput);
        console.log("Guesses made: " + guessesMade);
        updateGuessesMade();
        
        // If guesses left runs down to 0, add 1 to losses, reset guesses made, and reset computer choice
        if (guessesLeft === 0) {
            losses++;
            console.log("You lose...");
            updateLosses();
            reset();
        }
    }

    // And then need everything to reset so that the score remains but guesses made and computer's choice reset

};
