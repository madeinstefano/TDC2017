function updateValues( values, newValues ) {
  const updated = Object.assign( {}, values );
  if ( newValues.keywords ) {
    updated.keywords = newValues.keywords
      .reduce( ( sum, item ) => sum + item.value, updated.keywords || 0 );
  }

  if ( newValues.urls ) {
    updated.urls = newValues.urls
      .reduce( ( sum, item ) => sum + item.value, updated.urls || 0 );
  }

  if ( newValues.media ) {
    updated.media = newValues.media
      .reduce( ( sum, item ) => sum + item.value, updated.media || 0 );
  }

  return updated;
}

module.exports = updateValues;
