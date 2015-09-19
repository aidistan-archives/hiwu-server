var HiwuApi = require('./index.js');
var needle = require('needle');

function Item(api) {
  this.api = api;
}

Item.prototype = {
  publicView: function(itemId, cb) {
    this.api.get('/api/Items/' + itemId + '/publicView', cb);
  },

  createPhoto: function(itemId, data, cb) {
    this.api.multipost('/api/Items/' + itemId + '/photos', data, cb);
  },

  deletePhoto: function(itemId, photoId, cb) {
    this.api.delete('/api/Items/' + itemId + '/photos/' + photoId, cb);
  },

  deletePhotos: function(itemId, cb) {
    this.api.delete('/api/Items/' + itemId + '/photos', cb);
  }
};

module.exports = Item;
