var ALY  = require('aliyun-sdk');
var Path = require('path');

module.exports = function(app) {
  app.aliyun = {
    oss: new ALY.OSS({
      accessKeyId: 'xkrwvJXnndncswCK',
      secretAccessKey: 'GbDaWhOMsKvhRFRBAv4aHYBmreArQZ',
      securityToken: '',
      endpoint: app.get('env') == 'development' ?
        'http://oss-cn-beijing.aliyuncs.com' :
        'http://oss-cn-beijing-internal.aliyuncs.com',
      apiVersion: '2013-10-15'
    })
  };

  app.aliyun.oss.makeKey = function() {
    for (k in arguments) arguments[k] = arguments[k].toString();
    return(app.get('env') + '/' + Path.join.apply(this, arguments));
  }

  app.aliyun.oss.makeUrl = function() {
    for (k in arguments) arguments[k] = arguments[k].toString();
    return(Path.join(app.aliyun.oss.config.endpoint, app.get('env'), Path.join.apply(this, arguments)));
  }
};
