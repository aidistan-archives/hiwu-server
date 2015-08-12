var url = require('url')

module.exports = function(Photo) {
  // Delete the data from Aliyun OSS before deletion
  Photo.observe('before delete', function(ctx, next) {
    Photo.find({ where: ctx.where }, function(err, photos) {
      if (!err) {
        for (i in photos) {
          Photo.app.aliyun.oss.deleteObject({
            Bucket: 'hiwu',
            Key: url.parse(photos[i].url).pathname.replace(/^\//, '')
          },
          function (err, data) {
            if (err) {
              console.log('Error raised when deleting a photo from Aliyun OSS:', err);
            }
          });
        }
      }
      next();
    });
  });
};
