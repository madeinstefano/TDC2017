const chai = require( 'chai' ); // eslint-disable-line import/no-extraneous-dependencies

const assert = chai.assert;

describe( 'Feature Test', () => {
  context( 'Simple scenario: direct code', () => {
    const canUseFeature = require( './1' ); // eslint-disable-line global-require

    it( 'Should deny fetures that dont belong', () => {
      assert( canUseFeature( 'snapchat', 'postVideo' ) );
    } );

    it( 'Should allow fetures that belong', () => {
      assert.isNotOk( canUseFeature( 'snapchat', 'updateProfile' ) );
    } );
  } );

  context( 'Simple scenario: meta code', () => {
    const canUseFeature = require( './2' ); // eslint-disable-line global-require

    it( 'Should deny fetures that dont belong', () => {
      assert( canUseFeature( 'snapchat', 'postVideo' ) );
    } );

    it( 'Should allow fetures that belong', () => {
      assert.isNotOk( canUseFeature( 'snapchat', 'updateProfile' ) );
    } );
  } );

  context( 'Complex scenario: direct code', () => {
    const canUseFeature = require( './3' ); // eslint-disable-line global-require

    it( 'Should deny fetures that dont belong', () => {
      assert( canUseFeature( 'snapchat', 'useEffect', 4 ) );
    } );

    it( 'Should allow fetures that belong', () => {
      assert.isNotOk( canUseFeature( 'snapchat', 'updateProfile', 2 ) );
      assert.isNotOk( canUseFeature( 'snapchat', 'useEffect', 2 ) );
    } );
  } );

  context( 'Complex scenario: meta code', () => {
    const canUseFeature = require( './4' ); // eslint-disable-line global-require

    it( 'Should deny fetures that dont belong', () => {
      assert.isNotOk( canUseFeature( undefined, 'zoom', undefined ) );
      assert.isNotOk( canUseFeature( 'googleplus', 'zoom', undefined ) );
      assert.isNotOk( canUseFeature( 'googleplus', 'updateStatus', undefined ) );
      assert.isNotOk( canUseFeature( 'googleplus', 'updateStatus', 'asass' ) );
      assert.isNotOk( canUseFeature( 'googleplus', 'updateStatus', 5 ) );
      assert.isNotOk( canUseFeature( 'snapchat', 'useEffect', 2 ) );
      assert.isNotOk( canUseFeature( 'snapchat', 'updateProfile', 2 ) );
    } );

    it( 'Should allow fetures that belong', () => {
      assert( canUseFeature( 'twitter', 'postImage', '2' ) );
      assert( canUseFeature( 'googleplus', 'updateStatus', 4 ) );
      assert( canUseFeature( 'linkedin', 'updateProfile' ) );
      assert( canUseFeature( 'snapchat', 'useEffect', 4 ) );
    } );
  } );
} );
