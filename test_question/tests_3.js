const Deck = require( './deck_2.js' );

const deck = new Deck();

console.assert( typeof deck.splice === 'undefined' );
console.assert( typeof deck.splice === 'undefined' );
console.log( deck.length === 0 ); // false
