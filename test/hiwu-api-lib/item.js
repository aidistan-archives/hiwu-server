var HiwuApi = require('./index.js');
var needle = require('needle');

function Item(api) {
  this.api = api;
}

Item.prototype = {
  createPhoto: function(itemId, data, cb) {
    var api = this.api;
    var path = '/api/Items/' + itemId + '/photos';

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('POST: ' + path);
    path += '?access_token=' + api.accessToken.id;

    needle.post(api.url(path), data, {multipart: true}, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      if (api.debugger.body)
        console.log('BODY: ' + JSON.stringify(res.body));
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  },

  deletePhoto: function(itemId, photoId, cb) {
    var api = this.api;
    var path = '/api/Items/' + itemId + '/photos/' + photoId;

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('DELETE: ' + path);
    path += '?access_token=' + api.accessToken.id;

    needle.delete(api.url(path), null, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  },

  deletePhotos: function(itemId, cb) {
    var api = this.api;
    var path = '/api/Items/' + itemId + '/photos';

    if (api.debugger.border)
      console.log('====================');
    if (api.debugger.api)
      console.log('DELETE: ' + path);
    path += '?access_token=' + api.accessToken.id;

    needle.delete(api.url(path), null, function(err, res) {
      if (err) throw err;
      if (api.debugger.status)
        console.log('STATUS: ' + res.statusCode);
      api.lastResult = res.body;
      if (cb) cb(err, res.body); else api.end();
    });
  }
};

module.exports = Item;
