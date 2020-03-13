const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];

const cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) console.log("You found a match!");
  else console.log("Sorry, try again.")
}


function flipCard(cardId) {
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	//console.log("User flipped " + cards[cardId].rank +"!");
	  if (cardsInPlay.length === 2) {
	  	checkForMatch();
	  }
		
};

console.log(cardsInPlay);

function createBoard() {
	const cardTable = document.getElementById('game-board');
	for (let i = 0; i < arrayName.length; i++) {
		let cardElement = document.createElement('img');
		  cardElement.setAttribute('src', 'images/back.png');
		  cardElement.setAttribute('data-id', i);
		  cardElement.addEventListener('click', flipCard);
		  cardTable.appendChild(cardElement);
	}
}

createBoard();
