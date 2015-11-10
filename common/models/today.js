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
            scope: {
              where: { public: true },
              include: 'photos'
            }
          }]
        }
      }
    }, function(err, _entries) {
      var entries = [];

      _entries.forEach(function(entry) {
        var gallery = entry.gallery(); // have to call gallery() explicitly
        if (gallery) {
          entry.gallery = gallery;
          entries.push(entry);
        }
      });

      cb(err, entries);
    });
  };

  Today.remoteMethod(
    'publicView',
    {
      description: 'Get Today\'s selected galleries.',
      accepts: [],
      returns: {
        arg: 'entries', type: ['Today'], root: true
      },
      http: {verb: 'get'}
    }
  );
};
