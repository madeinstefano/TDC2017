const features = {
  twitter: {
    1: [ 'postImage', 'updateStatus' ],
    2: [ 'postImage', 'updateStatus', 'postVideo' ]
  },
  instagram: {
    1: [ 'postImage' ],
    2: [ 'postImage', 'postVideo' ],
    3: [ 'postImage', 'updateStatus', 'postVideo' ]
  },
  facebook: [ 'postImage', 'updateStatus', 'friendRequest' ],
  linkedin: [ 'updateProfile', 'updateStatus' ],
  snapchat: {
    '<3': [ 'postImage', 'postVideo' ],
    '>=3': [ 'postImage', 'postVideo', 'useEffect' ]
  },
  googleplus: {
    '>3': [ 'postImage' ],
    4: [ 'postImage', 'updateStatus', 'updateProfile' ]
  }
};

function canUseFeature( network, feature, version ) {
  const rules = features[network];

  if ( Array.isArray( rules ) ) { return rules.includes( feature ); }
  if ( typeof rules !== 'object' ) { return false; }
  if ( !isFinite( version ) || !/^\d$/.test( version ) ) { return false; }

  const safeV = JSON.parse( `{ "v": ${version} }` ).v;
  const expressions = Reflect.ownKeys( rules )
    .map( k => ( /^\d+/.test( k ) ? '===' : '' ) + k )
    .sort( op => !op.startsWith( '=' ) );

  const key = expressions.find( op => Function( `return ${safeV} ${op}` )() );

  return rules[key.replace( /^===/, '' )].includes( feature );
}

module.exports = canUseFeature;
