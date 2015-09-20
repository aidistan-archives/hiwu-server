var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var needle = require('needle');
var spawn = require('child_process').spawn;

describe('Unit Test: Item', function() {
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

  describe('Item',function() {
    var api = new HiwuApi();
    var item;

    before(function(done) {
      async.series([
        function(cb) {
          api.HiwuUser.simpleLogin('aidistan', 'user', cb);
        },
        function(cb) {
          api.HiwuUser.createGallery(api.lastResult.user.id, {
            name: 'Gallery'
          }, cb);
        },
        function(cb) {
          api.Gallery.createItem(api.lastResult.id, {
            name: 'Item'
          }, cb);
        }
      ], function() {
        item = api.lastResult;
        done();
      });
    });

    describe('#createPhoto', function() {
      before(function(done) {
        api.Item.createPhoto(item.id, {
          data: {
            file: 'seeds/chunranbeijing/chunranicon.jpg',
            content_type: 'image/jpeg'
          }
        }, done);
      });

      it('should add photo', function() {
        assert(api.lastResult.url);
      });
    });

    describe('#deletePhoto', function() {
      before(function(done) {
        api.Item.createPhoto(item.id, {
          data: {
            file: 'seeds/chunranbeijing/chunranicon.jpg',
            content_type: 'image/jpeg'
          }
        }, function(err, photo) {
          api.Item.deletePhoto(item.id, api.lastResult.id, done);
        });
      });

      it('should delete photo', function() {
        assert({}, api.lastResult);
      });
    });

    describe('#deletePhotos', function() {
      before(function(done) {
        api.Item.deletePhotos(item.id, done);
      });

      it('should delete all photos', function() {
      });
    });
  });
});
