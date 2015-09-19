var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var spawn = require('child_process').spawn;

describe('HiwuApi', function() {
  describe('Item', function () {
    var server;

    beforeEach(function(done) {
      server = spawn('node', ['.']);

      function complete(data) {
        server.stdout.removeListener('data', complete);
        done();
      }

      server.stdout.on('data', complete);
    });

    afterEach(function(done) {
      server.kill();
      done();
    });

    describe('#publicView', function(done) {
      it('should not return if private', function(done) {
        var api = new HiwuApi();

        async.series([
          function(cb) {
            api.HiwuUser.login({
              username: 'hiwu.ren',
              password: 'duludou!'
            }, 'user', cb);
          },
          function(cb) {
            api.HiwuUser.createGallery(api.lastResult.user.id, {
              name: 'Gallery'
            }, cb);
          },
          function(cb) {
            api.Gallery.createItem(api.lastResult.id, {
              name: 'Item',
              public: false
            }, cb);
          },
        ], function(err, results) {
          api.Item.publicView(api.lastResult.id, function(err, item) {
            assert(item.error);
            assert.equal('PRIVATE_MODEL_VISITED', item.error.code);
            done();
          });
        });
      });

      it('should return if public', function(done) {
        var api = new HiwuApi();

        async.series([
          function(cb) {
            api.HiwuUser.login({
              username: 'hiwu.ren',
              password: 'duludou!'
            }, 'user', cb);
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
          },
        ], function(err, results) {
          api.Item.publicView(api.lastResult.id, function(err, item) {
            assert(item.id);
            assert.equal('Item', item.name);
            done();
          });
        });
      });
    });
  });
});
