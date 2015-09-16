var loopback = require('loopback');
var multiparty = require('multiparty');
var fs = require('fs');

module.exports = function(Item) {
  // Wrap the built-in `create` method to add userId attribute
  // Refer to the example in "Change the implementation of built-in methods"
  // http://docs.strongloop.com/display/public/LB/Customizing+models
  Item.on('dataSourceAttached', function(obj){
    var create  = Item.create;
    Item.create = function(data, options, cb) {
      Item.app.models.Gallery.findById(data.galleryId, function(err, obj) {
        if (err) return cb(err);
        data.userId = obj.userId;
        create.apply(Item, [data, options, cb]);
      });
    };

    var findById = Item.findById;
    Item.findById = function () {
      var id = arguments[0];
      var cb = arguments[arguments.length - 1];
      var filter = arguments.length > 2 ? arguments[1] : undefined;

      findById.apply(Item, [id, filter, function (err, obj) {
        if (err) return cb(err);
        if (obj == null) return cb(err, obj); // obj == null where not exists

        var accessToken = loopback.getCurrentContext().active.accessToken;
        if (obj.public || (accessToken && accessToken.userId === obj.userId)) {
          cb(err, obj);
        } else {
          cb(err, null); // mimic a not-exists error
        }
      }]);
    };
  });

  // Cancel the built-in `__create__photos` method
  Item.disableRemoteMethod('__create__photos', false);

  Item.prototype.createPhoto = function(req, cb) {
    new multiparty.Form().parse(req, function(err, data, files) {
      if (err) return cb(err);

      data.itemId = req.remotingContext.instance.id;
      Item.app.models.Photo.create(data, function(err, photo) {
        if (err) return cb(err);

        var oss  = Item.app.aliyun.oss;
        var file = files.data[0];

        // Update the url
        photo.updateAttribute('url', oss.makeUrl('photo', photo.id));

        // Save the image
        oss.putObject({
          Bucket: 'hiwu',
          Key: oss.makeKey('photo', photo.id),
          Body: fs.readFileSync(file.path),
          ContentType: file.headers['content-type'],
        }, function (err, data) {
          if (err) {
            console.log('Failed to upload to Aliyun OSS:', err);
          }

          // Cleanup after uploading
          for (var i in files) for (var j in files[i])
            fs.unlink(files[i][j].path, function (err) {
              if (err) throw err;
            });
        });

        cb(err, photo);
      });
    });
  };

  Item.remoteMethod(
    'createPhoto',
    {
      description: 'Upload a new photo to this item.',
      accepts: {arg: 'req', type: 'object', http: { source: 'req' }},
      returns: {arg: 'photo', type: 'Photo', root: true},
      http: {verb: 'post', path: '/photos'},
      isStatic: false
    }
  );
};
