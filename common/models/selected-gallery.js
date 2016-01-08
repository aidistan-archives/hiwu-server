module.exports = function(SelectedGallery) {
  SelectedGallery.publicView = function(cb) {
    SelectedGallery.find({
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
      },
      order: ["date_y DESC", "date_m DESC", "date_d DESC"]
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

  SelectedGallery.remoteMethod(
    'publicView',
    {
      description: 'Get Today\'s selected galleries.',
      accepts: [],
      returns: {
        arg: 'entries', type: ['SelectedGallery'], root: true
      },
      http: {verb: 'get'}
    }
  );
};
