const chai = require( 'chai' ); // eslint-disable-line import/no-extraneous-dependencies

const Deck1 = require( './deck_1.js' );
const Deck2 = require( './deck_2.js' );
const Deck3 = require( './deck_3.js' );

const assert = chai.assert;
const expect = chai.expect;

// basic Deck class tests, all implementations should do ok here
function basicTest( DeckClass ) {
  const deck = new DeckClass();

  expect( deck.length ).to.eql( 52 );
  expect( deck.draw() ).to.be.a.string; // eslint-disable-line no-unused-expressions
  expect( deck.length ).to.eql( 51 );

  const beforeShuffleOrder = Array.from( deck ).join( '' );
  deck.shuffle();
  const afterShuffleOrder = Array.from( deck ).join( '' );
  // after shuffling
  expect( deck.length ).to.eql( 52 );

  // check if deck changed its order
  expect( beforeShuffleOrder ).to.not.eql( afterShuffleOrder );

  let forOfLoops = 0;
  for ( const card of deck ) { forOfLoops++; }
  expect( forOfLoops ).to.eql( 52 );

  let forEachLoops = 0;
  deck.forEach( card => forEachLoops++ );
  expect( forEachLoops ).to.eql( 52 );
}

function shouldNotBeArray( DeckClass ) {
  const deck = new DeckClass();
  expect( deck.push ).to.be.a.undefined; // eslint-disable-line no-unused-expressions
  expect( deck.splice ).to.be.a.undefined; // eslint-disable-line no-unused-expressions
  expect( deck.slice ).to.be.a.undefined;  // eslint-disable-line no-unused-expressions

  assert.isNotOk( deck instanceof Array );
}

function shouldNotExposeInternalArray( DeckClass ) {
  const deck = new DeckClass();
  const props = Reflect.ownKeys( deck );
  props.forEach( prop => {
    assert.isNotOk( Array.isArray( deck[prop] ) );
  } );
}

describe( 'Deck implementations', () => {
  context( 'Implementation: Array inheritance', () => {
    it( 'Should do the basics', () => {
      basicTest( Deck1 );
    } );

    it( 'Should not expose unnecessary methods', () => {
      shouldNotBeArray( Deck1 );
    } );

    it( 'Should not expose internal array', () => {
      shouldNotExposeInternalArray( Deck1 );
    } );
  } );

  context( 'Implementation: Array wrapper', () => {
    it( 'Should do the basics', () => {
      basicTest( Deck2 );
    } );

    it( 'Should not expose unnecessary methods', () => {
      shouldNotBeArray( Deck2 );
    } );

    it( 'Should not expose internal array', () => {
      shouldNotExposeInternalArray( Deck2 );
    } );
  } );

  context( 'Implementation: Private Array wrapper', () => {
    it( 'Should do the basics', () => {
      basicTest( Deck3 );
    } );

    it( 'Should not expose unnecessary methods', () => {
      shouldNotBeArray( Deck3 );
    } );

    it( 'Should not expose internal array', () => {
      shouldNotExposeInternalArray( Deck3 );
    } );
  } );
} );
