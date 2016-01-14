var https = require('https');

module.exports = function(Hiwu) {
  // Hide all predefined remote methods
  Hiwu.disableRemoteMethod('create', true);
  Hiwu.disableRemoteMethod('upsert', true);
  Hiwu.disableRemoteMethod('find', true);
  Hiwu.disableRemoteMethod('exists', true);
  Hiwu.disableRemoteMethod('findById', true);
  Hiwu.disableRemoteMethod('deleteById', true);
  Hiwu.disableRemoteMethod('updateAttributes', false);
  Hiwu.disableRemoteMethod('findOne', true);
  Hiwu.disableRemoteMethod('updateAll', true);
  Hiwu.disableRemoteMethod('count', true);
  Hiwu.disableRemoteMethod('createChangeStream', true);

  Hiwu.jianliao = function(channel, obj, cb) {
    var msg = {
      // authorName
      title: '',
      text: ''
      // redirectUrl
      // imageUrl
    };

    var options = {
      hostname: 'jianliao.com',
      port: 443,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    if (channel === 'apply') {
      if (
        !isPrensent(obj.title) || !isPrensent(obj.description)
      ) { return cb(null, {}); }
      else if (
        !isPrensent(obj.weixin) && !isPrensent(obj.weibo) &&
        !isPrensent(obj.mobile) && !isPrensent(obj.email)
      ) { return cb(null, {}); }

      msg.title = obj.title;
      msg.text = JSON.stringify({
        title: obj.title,
        description: obj.description,
        weixin: obj.weixin,
        weibo: obj.weibo,
        mobile: obj.mobile,
        email: obj.email
      });
      options.path = '/v2/services/webhook/7442dd3fc7f9321951ade0cd7a31efe2af0ce5ee';
    } else { return cb(null, {}); }

    var req = https.request(options, function(res) {
      var data = [];
      res.on('data', function(chunk) { data.push(chunk); });
      res.on('end',  function() {
        cb(null, JSON.parse(Buffer.concat(data)));
      });
    });
    req.on('error', cb);
    req.write(JSON.stringify(msg));
    req.end();

    function isPrensent(obj) {
      if (obj === undefined || obj === null || (typeof obj) !== 'string' || obj === '') {
        return false;
      } else {
        return true;
      }
    }
  };

  Hiwu.remoteMethod(
    'jianliao',
    {
      description: 'Send a message to the given Jianliao channel',
      accepts: [
        {
          arg: 'channel', type: 'string',
          http: {source: 'query'}, required: true
        },
        {
          arg: 'object', type: 'object',
          http: {source: 'body' },
          default: JSON.stringify({title: '', description: ''}, null, 2)
        }
      ],
      returns: {
        arg: 'return', type: 'object', root: true
      },
      http: {verb: 'put'}
    }
  );
};
