const ALL_CARDS = require( './all_cards' );

const dataDescr = { enumerable: true, writable: false, configurable: false };
const accessorDescr = { enumerable: true, configurable: false };

const defProp = value => Object.assign( value, dataDescr );
const defAccessor = value => Object.assign( value, accessorDescr );

class Deck {

  constructor() {
    let cards = [];

    Object.defineProperties( this, {
      shuffle: defProp( {
        value() { cards = ALL_CARDS.slice().sort( () => 0.5 - Math.random() ); }
      } ),
      draw: defProp( {
        value: () => cards.pop()
      } ),
      length: defAccessor( {
        get: () => cards.length
      } ),
      forEach: defProp( {
        value: fn => Reflect.apply( [].forEach, cards, [ fn ] )
      } ),
      [Symbol.iterator]: defProp( {
        *value() { yield* cards; }
      } )
    } );

    this.shuffle();
  }
}

module.exports = Deck;
