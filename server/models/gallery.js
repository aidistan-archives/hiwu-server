module.exports = function(Gallery) {
  Gallery.prototype.publicView = function(cb) {
    if (this.public) {
      Gallery.findById(this.id, {
        include: ['hiwuUser', {
          relation: 'items',
          scope: {
            include: 'photos',
            where: { public: true }
          }
        }]
      }, cb);
    } else {
      var err = new Error('the model you visited is private');
      err.statusCode = 404;
      err.code = 'PRIVATE_MODEL_VISITED';
      cb(err);
    }
  };

  Gallery.remoteMethod(
    'publicView',
    {
      description: 'View a public gallery.',
      returns: {arg: 'gallery', type: 'Gallery', root: true},
      http: {verb: 'get'},
      isStatic: false
    }
  );
};
