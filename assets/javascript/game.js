// Computer Choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Count Variables
var wins = 0;
// console.log(wins);
var losses=0;
var guesses=9;
// variables to display text
var winsText = document.getElementById('w');
// console.log('winsText', winsText)
var lossesText = document.getElementById("l");
var guessesText = document.getElementById("g");
var userText = document.getElementById("ug");
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
// Game Components
// click event
var userGuess = event.key;
// console.log(userGuess);
// computer guess
var computerGuess= computerChoices[Math.floor(Math.random()*computerChoices.length)];
// for loop iterating on number of guesses left
// for (var i=0;i<=9;i++){
// if for win and new round
if(userGuess === computerGuess){
    wins++;
    guesses = 9;
}
// if for losses and new round
if(guesses === 0){
losses++;
guesses =9;
}
// if for guesses count down
if(userGuess != computerGuess){
    guesses--;
}
// display wins, losses, and guesses left
// console.log('wins', wins);
winsText.innerHTML = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesText.textContent = "guesses: " + guesses;
userText.textContent = "Your guesses so far: " + userGuess;

// }
};