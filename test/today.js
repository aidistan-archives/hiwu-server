var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var needle = require('needle');
var spawn = require('child_process').spawn;

describe('Today', function () {
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

  describe('#publicView', function () {
    it('should not return private galleries and private items', function(done) {
      var api = new HiwuApi();

      async.series([
        function(cb) {
          api.HiwuUser.login({
            username: 'hiwu.ren',
            password: 'duludou!'
          }, 'user', cb);
        },
        function(cb) {
          async.parallel([
            function(cb) {
              api.HiwuUser.createGallery(api.lastResult.user.id, {
                name: 'Public Gallery'
              }, function(err, gallery) {
                api.Gallery.createItem(gallery.id, {
                  name: 'Public Item',
                }, function(err, item) {
                  api.Gallery.createItem(gallery.id, {
                    name: 'Private Item',
                    public: false
                  }, function(err, item) {
                    api.Today.create({
                      galleryId: gallery.id
                    }, cb);
                  });
                });
              });
            },
            function(cb) {
              api.HiwuUser.createGallery(api.lastResult.user.id, {
                name: 'Private Gallery',
                public: false
              }, function(err, gallery) {
                api.Today.create({
                  galleryId: gallery.id
                }, cb);
              });
            }
          ], cb);
        }
      ], function(err, results) {
        api.Today.publicView(function(err, galleries) {
          assert.equal(1, galleries.length);
          assert(galleries[0].public);
          assert(galleries[0].hiwuUser);
          assert.equal(1, galleries[0].items.length);
          assert(galleries[0].items[0].public);
          done();
        });
      });
    });
  });
});
