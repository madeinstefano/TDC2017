const ALL_CARDS = require( './all_cards' );

const cardsSym = Symbol( 'cards' );

class Deck {

  constructor() {
    this.shuffle();
  }

  forEach( fn ) {
    return Reflect.apply( [].forEach, this[cardsSym], [ fn ] );
  }

  get length() {
    return this[cardsSym].length;
  }

  shuffle() {
    this[cardsSym] = ALL_CARDS.slice().sort( () => 0.5 - Math.random() );
  }

  draw() {
    return this[cardsSym].pop();
  }

  *[Symbol.iterator]() {
    yield* this[cardsSym];
  }
}

module.exports = Deck;
