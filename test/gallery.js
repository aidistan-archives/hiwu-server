var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var spawn = require('child_process').spawn;

describe('Gallery', function () {
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
            name: 'Gallery',
            public: false
          }, cb);
        }
      ], function(err, results) {
        api.Gallery.publicView(api.lastResult.id, function(err, gallery) {
          assert(gallery.error);
          assert.equal('PRIVATE_MODEL_VISITED', gallery.error.code);
          done();
        });
      });
    });

    it('should return if public', function(done) {
      var api = new HiwuApi();
      var gallery;

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
          gallery = api.lastResult;
          api.Gallery.createItem(gallery.id, {
            name: 'Item'
          }, cb);
        }
      ], function(err, results) {
        api.Gallery.publicView(gallery.id, function(err, gallery) {
          assert(gallery.id);
          assert.equal('Gallery', gallery.name);
          assert(gallery.hiwuUser.id);
          assert.equal('Item', gallery.items[0].name);
          done();
        });
      });
    });
  });
});
