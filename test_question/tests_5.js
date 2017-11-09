const Deck = require( './deck_3.js' );


const deck = new Deck();

console.assert( typeof deck.splice === 'undefined' );

console.log( Reflect.ownKeys( deck ) );
// [ 'shuffle', 'draw', 'length', 'forEach', Symbol(Symbol.iterator) ]
