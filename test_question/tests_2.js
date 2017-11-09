const Deck = require( './deck_2.js' );

const deck = new Deck();

console.log( deck.push( '🂡' ) ); // 53
console.assert( typeof deck.splice === 'function' );

deck.splice( 0, 52 );
console.log( deck.length ); // 1
