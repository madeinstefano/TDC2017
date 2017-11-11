function canUseFeature( network, feature, version ) {
  if ( network === 'twitter' ) {
    if ( version === 1 ) {
      return [ 'postImage', 'updateStatus' ].includes( feature );
    } else if ( version === 2 ) {
      return [ 'postImage', 'updateStatus', 'postVideo' ]
        .includes( feature );
    }
  }

  if ( network === 'instagram' ) {
    if ( version === 1 ) {
      return [ 'postImage' ].includes( feature );
    } else if ( version === 2 ) {
      return [ 'postImage', 'postVideo' ].includes( feature );
    } else if ( version === 3 ) {
      return [ 'postImage', 'updateStatus', 'postVideo' ]
        .includes( feature );
    }
  }

  if ( network === 'facebook' ) {
    return [ 'postImage', 'updateStatus', 'friendRequest' ]
      .includes( feature );
  }

  if ( network === 'linkedin' ) {
    return [ 'updateProfile', 'updateStatus' ].includes( feature );
  }

  if ( network === 'snapchat' ) {
    if ( version < 3 ) {
      return [ 'postImage', 'postVideo' ].includes( feature );
    }
    return [ 'postImage', 'postVideo', 'useEffect' ].includes( feature );
  }

  if ( network === 'googleplus' ) {
    if ( version === 4 ) {
      return [ 'postImage', 'updateStatus', 'updateProfile' ]
        .includes( feature );
    } else if ( version > 3 ) {
      return [ 'postImage' ].includes( feature );
    }
  }

  return false;
}

module.exports = canUseFeature;
