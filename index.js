// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);

}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);*/
let cards = []
function writeCards(cards, event) {
    let thankYouCards = []
    for (let p = 0; p < cards.length; p++) {
      thankYouCards.push(`Thank you, ${cards[p]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
  }
  
  console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown(c) {
    while (c > -1) {
        console.log(c)
        c--
    }
    
  }

  countDown(10)
 
              

