var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped" + " " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped" + " " + cardTwo);
//if (cardsInPlay.length === 2) {
    //alert("yes");
//}
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You've found a match!");
}
else {
	alert("Sorry, try again");
}

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne)

console.log("User flipped " + cardThree)*/