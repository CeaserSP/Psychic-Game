// Computer Choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Count Variables
var wins=0;
var losses=0;
var guesses=9;

// Game Components
// click event
var userGuess = event.key;
// computer guess
var computerGuess= computerChoices[Math.floor(Math.random()*computerChoices.length) ];
// for loop iterating on number of guesses left
for (var i=0;i<=9;i++){
// if for win
if(userGuess === computerGuess){
    
}
// if for loss

// if to to subtract from guess

// if to reset guesses and starts next round
}