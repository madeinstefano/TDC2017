const chai = require( 'chai' ); // eslint-disable-line import/no-extraneous-dependencies
const SafeObject = require( './safe_object' );

const assert = chai.assert;

describe( 'Safe Object Test', () => {
  it( 'Should return the final value of nested properties', () => {
    const object = new SafeObject( { config: { color: 'red' } } );
    assert( object.config.color() === 'red' );
  } );

  it( 'Should return some part of a nested object', () => {
    const object = new SafeObject( { config: { color: 'red' } } );
    assert( object.config().color === 'red' );
  } );

  it( 'Should return undefined even to properties of properties that dont exists', () => {
    const object = new SafeObject( { config: { color: 'red' } } );
    assert( object.settings.color() === undefined );
    assert( object.settings.geo.coordinates() === undefined );
  } );

  it( 'Should work with primitives', () => {
    const primitive = new SafeObject( 1 );
    assert( primitive() === 1 );

    const undef = new SafeObject( undefined );
    assert( undef() === undefined );
  } );
} );
