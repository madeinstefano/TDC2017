const Deck = require( './deck_2.js' );

const deck = new Deck();

const cardsSym = Object.getOwnPropertySymbols( deck )[0];

console.log( deck[cardsSym].push( '🂡' ) ); // 53
console.assert( typeof deck[cardsSym].splice === 'function' );

deck[cardsSym].splice( 0, 52 );
console.log( deck.length ); // 1
