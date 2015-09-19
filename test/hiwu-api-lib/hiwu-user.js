var HiwuApi = require('./index.js');
var needle = require('needle');

function HiwuUser(api) {
  this.api = api;
}

HiwuUser.prototype = {
  login: function(data, include, cb) {
    var api = this.api;
    var path = '/api/HiwuUsers/login' + (include ? '?include=' + include : '');

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('POST: ' + path);

    needle.post(api.url(path), data, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      if (api.debugger.body)
        console.log('BODY: ' + JSON.stringify(res.body));
      api.accessToken = res.body;
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  },

  simpleLogin: function(username, include, cb) {
    var api = this.api;
    var path = '/api/HiwuUsers/simpleLogin?username=' + username +
               (include ? '&include=' + include : '');

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('POST: ' + path);

    needle.post(api.url(path), null, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      if (api.debugger.body)
        console.log('BODY: ' + JSON.stringify(res.body));
      api.accessToken = res.body;
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  },

  updateAttributes: function(userId, data, cb) {
    var api = this.api;
    var path = '/api/HiwuUsers/' + userId;

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('POST: ' + path);
    path += '?access_token=' + api.accessToken.id;

    needle.put(api.url(path), data, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      if (api.debugger.body)
        console.log('BODY: ' + JSON.stringify(res.body));
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  },

  // 由于 needle 目前上传 multipart 时编码存在 bug
  // 使用 updataAvatar 上传字符数据仅限 ASCII，中文字符请用 update
  updateAvatar: function(userId, data, cb) {
    var api = this.api;
    var path = '/api/HiwuUsers/' + userId + '/avatar';

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('POST: ' + path);
    path += '?access_token=' + api.accessToken.id;

    needle.put(api.url(path), data, {multipart: true}, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      if (api.debugger.body)
        console.log('BODY: ' + JSON.stringify(res.body));
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  },

  createGallery: function(userId, data, cb) {
    var api = this.api;
    var path = '/api/HiwuUsers/' + userId + '/galleries';

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('POST: ' + path);
    path += '?access_token=' + api.accessToken.id;

    needle.post(api.url(path), data, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      if (api.debugger.body)
        console.log('BODY: ' + JSON.stringify(res.body));
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  },

  publicView: function(userId, cb) {
    var api = this.api;
    var path = '/api/HiwuUsers/' + userId + '/publicView';

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('GET: ' + path);
    path += '?access_token=' + api.accessToken.id;

    needle.get(api.url(path), null, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      if (api.debugger.body)
        console.log('BODY: ' + JSON.stringify(res.body));
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  },
};

module.exports = HiwuUser;
