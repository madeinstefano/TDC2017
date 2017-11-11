const chai = require( 'chai' ); // eslint-disable-line import/no-extraneous-dependencies

const expect = chai.expect;

const knownValues = {
  keywords: 23,
  urls: 11,
  media: 12
};

const payload = require( './payload' );
const payload2 = require( './payload_2' );

const updateValuesV1 = require( './1' );
const updateValuesV2 = require( './2' );
const updateValuesV3 = require( './3' );
const updateValuesV4 = require( './4' );

describe( 'CrawlerOp test', () => {
  it( 'Sould update the values with the code 1', () => {
    const data = Object.assign( {}, knownValues );
    const result = updateValuesV1( data, payload );
    expect( result.keywords ).to.eql( 33 );
    expect( result.urls ).to.eql( 21 );
    expect( result.media ).to.eql( 30 );
  } );

  it( 'Sould update the values with the code 1 and the payload 1', () => {
    const data = Object.assign( {}, knownValues );
    const result = updateValuesV1( data, payload );
    expect( result.keywords ).to.eql( 33 );
    expect( result.urls ).to.eql( 21 );
    expect( result.media ).to.eql( 30 );
  } );

  it( 'Sould update the values with the code 2 and the payload 1', () => {
    const data = Object.assign( {}, knownValues );
    const result = updateValuesV2( data, payload );
    expect( result.keywords ).to.eql( 33 );
    expect( result.urls ).to.eql( 21 );
    expect( result.media ).to.eql( 30 );
  } );

  it( 'Sould update the values with the code 3 and the payload 2', () => {
    const data = Object.assign( {}, knownValues );
    const result = updateValuesV3( data, payload2 );
    expect( result.keywords ).to.eql( 33 );
    expect( result.urls ).to.eql( 21 );
    expect( result.media ).to.eql( 30 );
  } );

  it( 'Sould update the values with the code 4 and the payload 2', () => {
    const data = Object.assign( {}, knownValues );
    const result = updateValuesV4( data, payload2 );
    expect( result.keywords ).to.eql( 33 );
    expect( result.urls ).to.eql( 21 );
    expect( result.media ).to.eql( 30 );
  } );
} );
