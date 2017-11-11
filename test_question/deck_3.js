const ALL_CARDS = require( './all_cards' );

class Deck {
  constructor() {
    let cards = [];

    Object.defineProperties( this, {
      shuffle: {
        enumerable: true,
        writable: false,
        configurable: false,
        value() {
          cards = ALL_CARDS.slice().sort( () => 0.5 - Math.random() );
        }
      },
      draw: {
        enumerable: true,
        writable: false,
        configurable: false,
        value: () => cards.pop()
      },
      forEach: {
        enumerable: true,
        writable: false,
        configurable: false,
        value: fn => Reflect.apply( [].forEach, cards, [ fn ] )
      },
      length: {
        enumerable: true,
        configurable: false,
        get: () => cards.length
      },
      [Symbol.iterator]: {
        enumerable: true,
        writable: false,
        configurable: false,
        *value() { yield* cards; }
      }
    } );

    this.shuffle();
  }
}

module.exports = Deck;
