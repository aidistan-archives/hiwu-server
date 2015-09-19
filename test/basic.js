var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var needle = require('needle');
var spawn = require('child_process').spawn;

describe('HiwuApi', function() {
  var server;

  before(function(done) {
    server = spawn('node', ['.']);

    function complete(data) {
      server.stdout.removeListener('data', complete);
      done();
    }

    server.stdout.on('data', complete);
  });

  after(function(done) {
    server.kill();
    done();
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
