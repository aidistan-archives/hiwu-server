var HiwuApi = require('./index.js');
var needle = require('needle');

function Today(api) {
  this.api = api;
}

Today.prototype = {
  create: function(data, cb) {
    var api = this.api;
    var path = '/api/Today';

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

  publicView: function(cb) {
    var api = this.api;
    var path = '/api/Today/publicView';

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
  }
};

module.exports = Today;
