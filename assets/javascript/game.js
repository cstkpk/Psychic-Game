// Creates an array that lists out all of the possible choices for the computer
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// We start the game with the following stats:
var score = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

// Variable needed in case you want to view computer's choice on DOM
// var view = document.querySelector("#computer-choice");

// Function that renders computer choice randomly from the options array
var computerChoice = choices[Math.floor(Math.random() * choices.length)];
// Let's see what the computer's choice is
console.log("Computer chooses: " + computerChoice);
// In case you want to view the computer's first choice on DOM
    // function showComputerChoice() {
    //     document.querySelector("#computer-choice").innerHTML = "Computer choice: " + computerChoice;
    // }

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
function newComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("New Computer Choice is: " + computerChoice);

    // In case you want to view the computer's choice after reset as text on DOM
    // view.textContent = view.textContent + computerChoice;

    return computerChoice;  
}

// Function that resets the stats (other than score and losses, which accumulate through all rounds of the game)
var reset = function() {
    guessesLeft = 9;
    guessesMade = [];
    updateGuessesLeft();
    updateGuessesMade();
    newComputerChoice();
}

// THE GAME

// Calling functions to start the game
updateScore();
updateLosses();
updateGuessesLeft();
updateGuessesMade();
// Calling the function in case you want to view the computer's choice on DOM
// showComputerChoice();

// When the user presses a key, it will run the following function:
document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    
    // Let's see what the computer is seeing when we assign the event to a variable
    console.log("User Choice: " + userInput);
    // console.log("User type: " + typeof(userInput));
    
    // LET THE LOGIC BEGIN

    // This is to check whether the user has typed an acceptable key and to prevent non-acceptable keys from showing up on DOM
    var acceptableKey = choices.includes(userInput);
    if (!acceptableKey) {
        console.log("That's not an acceptable key");
    }

    // If the user's input matches the computer's choice, their score will increase and the stats will reset
    else if (userInput === computerChoice) { 
        console.log("It's a match!");
        score++;
        updateScore();
        reset();
    }

    // If the user's input doesn't match the computer's choice...
    else if (userInput !== computerChoice) {
        console.log("No match");
        
        // and if there are still more guesses left, continue playing and counting down until guesses left reaches 0
        guessesLeft--;
        updateGuessesLeft(); 
        
        // Add the guessed letter to the list of guesses made
        guessesMade.push(" " + userInput);
        updateGuessesMade();
        
        // If guesses left runs down to 0, add 1 to losses, reset guesses made, guesses left, and computer choice
        if (guessesLeft === 0) {
            losses++;
            console.log("You lose...");
            updateLosses();
            reset();
        }
    }

};
