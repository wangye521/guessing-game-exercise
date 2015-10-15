
var game = window.confirm ("Do you want to play a number guessing game?");
if (game) {
	window.alert("Let's start!");
}
else {
    window.alert("Alright, please close this page")
};

var secret = Math.floor(100 * Math.random()) + 1;
var guess = prompt("Enter a number between 1 and 100");

  while (guess != secret) {
	if (guess > secret) {
	guess = prompt("Too high, guess again");
}else{
    guess = prompt("Too low, guess again");
}
}
    alert("Contratulations, you got the number!");
