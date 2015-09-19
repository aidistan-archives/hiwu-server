module.exports = function(Today) {
  Today.publicView = function(cb) {
    Today.find({
      include: {
        relation: 'gallery',
        scope: {
          where: { public: true },
          include: [{
            relation: 'hiwuUser'
          },
          {
            relation: 'items',
            scope: { where: { public: true } }
          }]
        }
      }
    }, function(err, entries) {
      var galleries = [];

      entries.forEach(function(entry) {
        var gallery = entry.gallery();
        if (gallery) {
          galleries.push(gallery);
        }
      });

      cb(err, galleries);
    });
  };

  Today.remoteMethod(
    'publicView',
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
