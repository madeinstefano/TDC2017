function updateValues( values, newValues ) {
  const updated = Reflect.ownKeys( newValues ).reduce( ( object, key ) => {
    const value = newValues[key]
      .reduce( ( sum, item ) => sum + item.value, values[key] || 0 );
    return Object.assign( object, { [key]: value } );
  }, { } );
  return Object.assign( {}, values, updated );
}

module.exports = updateValues;
