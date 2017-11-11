const features = {
  twitter: [ 'postImage', 'updateStatus' ],
  instagram: [ 'postImage' ],
  facebook: [ 'postImage', 'updateStatus', 'friendRequest' ],
  linkedin: [ 'updateProfile', 'updateStatus' ],
  snapchat: [ 'postImage', 'postVideo' ],
  googleplus: [ 'postImage', 'updateStatus', 'updateProfile' ]
};

function canUseFeature( network, feature ) {
  return features[network].includes( feature );
}

module.exports = canUseFeature;
