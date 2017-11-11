function updateValues( values, newValues ) {
  const updated = Object.assign( {}, values );
  if ( newValues.top_keys ) {
    updated.keywords = newValues.top_keys
      .reduce( ( sum, item ) => sum + item.value, updated.keywords || 0 );
  }

  if ( newValues.deep_links ) {
    updated.urls = newValues.deep_links
      .reduce( ( sum, item ) => sum + item.value, updated.urls || 0 );
  }

  if ( newValues.photos ) {
    updated.media = newValues.photos
      .reduce( ( sum, item ) => sum + item.value, updated.media || 0 );
  }

  return updated;
}


module.exports = updateValues;
