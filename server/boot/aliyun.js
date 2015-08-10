var ALY = require('aliyun-sdk');

module.exports = function(app) {
  app.aliyun = {
    oss: new ALY.OSS({
      accessKeyId: 'xkrwvJXnndncswCK',
      secretAccessKey: 'GbDaWhOMsKvhRFRBAv4aHYBmreArQZ',
      securityToken: '',
      endpoint: 'http://oss-cn-beijing.aliyuncs.com',
      apiVersion: '2013-10-15'
    })
  };
};
