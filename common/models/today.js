module.exports = function(Today) {
  Today.public = function(cb) {
    Today.find({

    }, function(err, galleries) {
      cb(err, galleries);
    });
  };

  Today.remoteMethod(
    'public',
    {
      description: 'Get Today\'s selected galleries.',
      accepts: [],
      returns: {
        arg: 'galleries', type: ['Gallery'], root: true
      },
      http: {verb: 'get'}
    }
  );
};
