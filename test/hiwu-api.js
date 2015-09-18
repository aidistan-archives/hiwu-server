var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var needle = require('needle');

describe('HiwuApi', function() {
  describe('#url', function () {
    it('should return the root of a Hiwu API server', function(done) {
      var api = new HiwuApi();
      assert.equal('string', typeof(api.url()));
      needle.get(api.url(), null, function(err, res) {
        assert(res.body.uptime > 0);
        done();
      });
    });
  });

  it('should basically work', function(done) {
    var api = new HiwuApi();
    var item;

    async.series([
      function(cb) {
        api.HiwuUser.simpleLogin('aidistan', 'user', cb);
      },
      function(cb) {
        api.HiwuUser.updateAttributes(api.lastResult.user.id, {
          nickname: 'Aidi Stan'
        }, cb);
      },
      function(cb) {
        api.HiwuUser.updateAvatar(api.lastResult.id, {
          nickname: 'Aidi Stan',
          avatar: {
            file: 'seeds/chunranbeijing/chunranicon.jpg',
            content_type: 'image/jpeg'
          }
        }, cb);
      },
      function(cb) {
        api.HiwuUser.createGallery(api.lastResult.id, {
          name: 'Gallery'
        }, cb);
      },
      function(cb) {
        api.Gallery.createItem(api.lastResult.id, {
          name: 'Item'
        }, cb);
      },
      function(cb) {
        item = api.lastResult;
        api.Item.createPhoto(api.lastResult.id, {
          data: {
            file: 'seeds/chunranbeijing/chunranicon.jpg',
            content_type: 'image/jpeg'
          }
        }, cb);
      },
      function(cb) {
        api.Item.deletePhoto(item.id, api.lastResult.id, cb);
      }
    ], done);
  });
});
