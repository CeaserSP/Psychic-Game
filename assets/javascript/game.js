// Computer Choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Count Variables
var wins=0;
var losses=0;
var guesses=9;
// variables to display text
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
// Game Components
// click event
var userGuess = event.key;
// computer guess
var computerGuess= computerChoices[Math.floor(Math.random()*computerChoices.length) ];
// for loop iterating on number of guesses left
for (var i=0;i<=9;i++){
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
document.getElementById("w").textContent;
w.appendChild(wText+wins)

document.getElementById("l").textContent;
l.appendChild(lText+losses)

document.getElementById("g").textContent;
g.appendChild(gText+guesses)

}
};