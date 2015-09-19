var HiwuApi = require('./index.js');
var needle = require('needle');

function Gallery(api) {
  this.api = api;
}

Gallery.prototype = {
  createItem: function(galleryId, data, cb) {
    var api = this.api;
    var path = '/api/Galleries/' + galleryId + '/items';

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

  publicView: function(galleryId, cb) {
    var api = this.api;
    var path = '/api/Galleries/' + galleryId + '/publicView';

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

module.exports = Gallery;
