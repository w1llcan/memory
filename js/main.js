const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) console.log("You found a match!");
  else console.log("Sorry, try again.")
}


function flipCard(cardId) {
	console.log("User flipped " + cards[cardId] +"!");
	cardsInPlay.push(cards[cardId]);	
}

flipCard(2);
flipCard(0);
checkForMatch();
