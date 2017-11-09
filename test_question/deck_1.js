const ALL_CARDS = require( './all_cards' );

class Deck extends Array {

  constructor() {
    super();
    this.shuffle();
  }

  shuffle() {
    this.length = 0;
    this.push( ...ALL_CARDS.slice().sort( () => 0.5 - Math.random() ) );
  }

  draw() {
    return this.pop();
  }
}

module.exports = Deck;
