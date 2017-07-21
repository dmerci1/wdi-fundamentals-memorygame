var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",

},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",

}
];
var cardsInPlay = [];
var checkForMatch = function() {
this.setAttribute("src", (cards[cardId].cardImage));
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}	



var flipCard = function() {
var cardId = this.getAttribute("data-id");
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

cardsInPlay.push(cards[cardId].rank);




checkForMatch();

}


var createBoard = function() {
	 for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement("img");	 	
cardElement.setAttribute("src", "images/back.png");
cardElement.setAttribute("data-id", i);
cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);
  }
}
createBoard();
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne)

console.log("User flipped " + cardThree)*/