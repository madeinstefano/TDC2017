function canUseFeature( network, feature ) {
  if ( network === 'twitter' ) {
    return [ 'postImage', 'updateStatus' ].includes( feature );
  }

  if ( network === 'instagram' ) {
    return [ 'postImage' ].includes( feature );
  }

  if ( network === 'facebook' ) {
    return [ 'postImage', 'updateStatus', 'friendRequest' ].includes( feature );
  }

  if ( network === 'linkedin' ) {
    return [ 'updateProfile', 'updateStatus' ].includes( feature );
  }

  if ( network === 'snapchat' ) {
    return [ 'postImage', 'postVideo' ].includes( feature );
  }

  if ( network === 'googleplus' ) {
    return [ 'postImage', 'updateStatus', 'updateProfile' ].includes( feature );
  }

  return false;
}

module.exports = canUseFeature;
