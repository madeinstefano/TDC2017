const knownValues = {
  keywords: 23,
  urls: 11,
  media: 12
};

const result = updateValues( knownValues, payload );

expect( result.keywords ).to.eql( 33 );
expect( result.urls ).to.eql( 21 );
expect( result.media ).to.eql( 30 );
