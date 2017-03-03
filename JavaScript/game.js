//create secretNumber
var secretNumber = 4; 

//ask user for guess

var guess = Number(prompt("Guess a number: "));

//check if guess is right

if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!!")
}
//otherwise, check if higher 
else if(guess > secretNumber){
	alert("Too high, guess again");
}

//or check if lower
else {
	alert("Too low, guess again!");
}