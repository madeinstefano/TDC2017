const object = new SafeObject( { config: { color: 'red' } } );
assert( object.config.color() === 'red' );
assert( object.config().color === 'red' );

const empty = new SafeObject( {} );
assert( empty.settings.color() === undefined );
assert( empty.settings.geo.coordinates() === undefined );

const primitive = new SafeObject( 1 );
assert( primitive() === 1 );

const undef = new SafeObject( undefined );
assert( undef() === undefined );
