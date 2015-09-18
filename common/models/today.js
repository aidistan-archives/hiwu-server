module.exports = function(Today) {
  Today.public = function(cb) {
    Today.find({
      include: {
        relation: 'gallery',
        scope: {
          where: { public: true },
          include: {
            relation: 'items',
            scope: { where: { public: true } }
          }
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
