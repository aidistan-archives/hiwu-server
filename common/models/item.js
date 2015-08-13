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
        if (err || obj == null) {
          cb(err, obj);
        } else {
          data.userId = obj.userId;
          create.apply(Item, [data, options, function(err, obj) {
            return(cb(err, obj));
          }]);
        }
      });
    };
  });

  // Cancel the built-in `__create__photos` method
  Item.disableRemoteMethod('__create__photos', false);

  Item.prototype.create_photo = function(req, cb) {
    new multiparty.Form().parse(req, function(err, data, files) {
      if (err) cb(err, null);

      data.itemId = req.remotingContext.instance.id;
      Item.app.models.Photo.create(data, function(err, photo) {
        var oss  = Item.app.aliyun.oss;
        var file = files.data[0];
        if (!err) {
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
              console.log('Error raised when uploading a photo to Aliyun OSS:', err);
            }

            // Cleanup after uploading
            for (i in files) for (j in files[i])
              fs.unlink(files[i][j].path, function (err) { if (err) throw err; });
          });
        }
        cb(err, photo);
      });
    });
  };

  Item.remoteMethod(
    'create_photo',
    {
      description: 'Upload a new photo to this item.',
      accepts: {arg: 'req', type: 'object', http: { source: 'req' }},
      returns: {arg: 'photo', type: 'Photo', root: true},
      http: {verb: 'post', path: '/photos'},
      isStatic: false
    }
  );
};
