const ALL_CARDS = require( './all_cards' );

class Deck {
  constructor() {
    let cards = [];

    this.shuffle = () => {
      cards = ALL_CARDS.slice().sort( () => 0.5 - Math.random() );
    };
    this.draw = () => cards.pop();
    this.forEach = fn => Reflect.apply( [].forEach, cards, [ fn ] );
    this[Symbol.iterator] = function *() {
      yield* cards;
    };

    Object.defineProperty( this, 'length', {
      get() { return cards.length; }
    } );

    this.shuffle();
  }
}

module.exports = Deck;
