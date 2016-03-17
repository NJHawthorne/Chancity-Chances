// var cardSuits = ['spade', 'diamond', 'club', 'heart'];
// var cardValues = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];

//Declaring a constructor for a playing card
function PlayingCard(value, suit) {
	//Giving the playing card either a default value or allowing the programmer to choose their own value.
	this.value = value || 'ace'
	//Giving the playing card either a default suit or allowing the programmer to choose their own suit.
	this.suit = suit || 'spades'
}
// function whatIsYourCard () {}
// 	var mySuit = prompt.toLowerCase('What is the suit of your card?');
// 	if (mySuit )
// 	var myValue = prompt.toLowerCase('What is the value of your card?');
// }

//Declaring a new object that runs the playing card constructor
var myCard = new PlayingCard('jack', 'diamonds');
//printing the values from the constructor and giving the user their card
console.log("Your card is the "+myCard.value+" of "+myCard.suit+".");

//Setting up a constructor for a casino die
function GamblingDie() {
	//Setting up an array of possible numbers to be referred to later
	this.dieValue = [1, 2, 3, 4, 5, 6];
	//Setting up a function for rolling the die
	this.roll = function() {
		//Declaring a variable and setting it equal to some random integer between 1 and 6.
		var randomRoll = Math.ceil(Math.random()* this.dieValue.length);
		//Printing the value of the random 'roll'
		console.log(randomRoll+' is the current die value');
		//Giving the function of a return value, even if it won't use it.
		return randomRoll;
	}
}
//Creating an object for a user's personal die
var myDie = new GamblingDie();
//Calling the function inside of the die
myDie.roll();

//Creating a function to run the possible values of 1000 dice rolls using 2 dice
function getProbabilities() {
	//Creating an empty array for where the results get printed
	var diceResults = [];
	//Creating an empty array for the total number of values (30 2's, 55 3's, etc.)
	var diceResultsTotals = [], prev;
	//Setting up a for loop to run 1000 rolls
	for (var i = 0; i < 1000; i++) {
		//Creating a variable and setting it equal to the sum of two random 1-6 numbers
		var diceRoll = (Math.ceil(Math.random()* 6) + Math.ceil(Math.random()* 6))
		//Pushing the resulting value into an array
		diceResults.push(diceRoll);
		diceResults.sort(function(a, b) {
  			return a - b;
		});
	}
	    for ( var i = 0; i < diceResults.length; i++ ) {
        if ( diceResults[i] !== prev ) {
            diceResultsTotals.push(1);
        } else {
            diceResultsTotals[diceResultsTotals.length-1]++;
        }
        prev = diceResults[i];
    }

	console.log(diceResultsTotals);
}
getProbabilities();