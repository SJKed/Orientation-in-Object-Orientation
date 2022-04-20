class Card {
    constructor(suite, value, isFaceDown) {
        this.suite = suite;
        this.value = value;
        this.isFaceDown = isFaceDown;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    buildDeck() {
        const suites = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        for (let i = 0; i < suites.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.addCard(new Card(suites[i], values[j], false));
            }
        }
    }
    addCard(card) {
        this.cards.push(card);
    }
    drawCard() { //Remove and return the top card
        return this.cards.pop();
    }
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            let randomIndex = Math.floor(Math.random() * this.cards.length);
            let target = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = target;
        }
    }
}

const deck = new Deck();
console.log(deck.cards);
deck.shuffle();
console.log(deck.cards);
console.log(deck.drawCard());