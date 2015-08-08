var ALY = require('aliyun-sdk');
var ENV = process.env.NODE_ENV || 'development';
var oss = new ALY.OSS({
  accessKeyId: 'xkrwvJXnndncswCK',
  secretAccessKey: 'GbDaWhOMsKvhRFRBAv4aHYBmreArQZ',
  securityToken: '',
  endpoint: 'http://oss-cn-beijing.aliyuncs.com',
  apiVersion: '2013-10-15'
});

module.exports = function(Photo) {
  Photo.afterRemote('create', function(ctx, photo, next) {
    var path = ENV + '/' + photo.id;
    oss.putObject({
      Bucket: 'hiwu',
      Key: path,
      Body: photo.url,
      // AccessControlAllowOrigin: '',
      ContentType: 'image/jpeg',
      // CacheControl: 'no-cache',
      // ContentDisposition: '',
      ContentEncoding: 'utf-8',
      ServerSideEncryption: 'AES256'
      // Expires: ''
    }, function (err, data) {
      if (err) {
        console.log('Error raised when uploading a photo to Aliyun OSS:', err);
      } else {
        photo.updateAttribute('url', 'http://hiwu.oss-cn-beijing.aliyuncs.com/' + path);
        ctx.result.url = '';
      }
    });
    next();
  });
};
