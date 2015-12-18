var ALY  = require('aliyun-sdk');
var Path = require('path');

module.exports = function(app) {
  app.aliyun = {
    oss: new ALY.OSS({
      accessKeyId: 'xkrwvJXnndncswCK',
      secretAccessKey: 'GbDaWhOMsKvhRFRBAv4aHYBmreArQZ',
      securityToken: '',
      endpoint: app.get('env') === 'development' ?
        'http://oss-cn-beijing.aliyuncs.com' :
        'http://oss-cn-beijing-internal.aliyuncs.com',
      apiVersion: '2013-10-15'
    })
  };

  app.aliyun.oss.makeKey = function() {
    var segs = [app.get('env')];
    for (var k in arguments)
      segs.push(arguments[k].toString());
    return(segs.join('/'));
  };

  app.aliyun.oss.makeInternalUrl = function() {
    return(
      'http://oss-cn-beijing-internal.aliyuncs.com' +
      app.aliyun.oss.makeKey.apply(this, arguments)
    );
  };

  app.aliyun.oss.makeExternalUrl = function() {
    return(
      'http://hiwu.oss-cn-beijing.aliyuncs.com/' +
      app.aliyun.oss.makeKey.apply(this, arguments)
    );
  };

  app.aliyun.oss.makeCdnUrl = function() {
    return(
      'http://oss.hiwu.ren/' +
      app.aliyun.oss.makeKey.apply(this, arguments)
    );
  };

  app.aliyun.oss.makeImgUrl = function() {
    return(
      'http://img.hiwu.ren/' +
      app.aliyun.oss.makeKey.apply(this, arguments)
    );
  };
};
