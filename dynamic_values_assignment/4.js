const map = new Map( [
  [ 'keywords', 'top_keys' ],
  [ 'urls', 'deep_links' ],
  [ 'media', 'photos' ]
] );

function updateValues( values, newValues ) {
  const updated = {};
  for ( const [ kLeft, kRight ] of map ) {
    if ( !Reflect.has( newValues, kRight ) ) { continue; }
    updated[kLeft] = newValues[kRight]
      .reduce( ( sum, item ) => sum + item.value, values[kLeft] );
  }
  return Object.assign( {}, values, updated );
}

module.exports = updateValues;
