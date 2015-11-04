var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var needle = require('needle');
var spawn = require('child_process').spawn;

describe('Integration Test: Public Views', function () {
  this.timeout(3000);

  var api;
  var server;

  var hiwuUser;
  var privateGallery;
  var publicGallery;
  var privateItem;
  var publicItem;

  before(function(done) {
    server = spawn('node', ['.']);

    function complete(data) {
      server.stdout.removeListener('data', complete);
      init(done);
    }

    server.stdout.on('data', complete);
  });

  after(function(done) {
    server.kill();
    done();
  });

  describe('HiwuUser', function() {
    describe('#publicView', function () {
      before(function(done) {
        api.HiwuUser.publicView(hiwuUser.id, function(err, res) {
          hiwuUser = res;
          done();
        });
      });

      it('should return public galleries', function() {
        assert.equal(1, hiwuUser.galleries.length);
        testPublicGallery(hiwuUser.galleries[0]);
      });
    });
  });

  describe('Gallery', function() {
    describe('#publicView', function () {
      it('should not return if private', function(done) {
        api.Gallery.publicView(privateGallery.id, function(err, gallery) {
          assert(gallery.error);
          assert.equal('PRIVATE_MODEL_VISITED', gallery.error.code);
          done();
        });
      });

      it('should return if public', function(done) {
        api.Gallery.publicView(publicGallery.id, function(err, gallery) {
          assert(gallery.hiwuUser);
          testPublicGallery(gallery);
          done();
        });
      });
    });
  });

  describe('Item', function() {
    describe('#publicView', function () {
      it('should not return if private', function(done) {
        api.Item.publicView(privateItem.id, function(err, item) {
          assert(item.error);
          assert.equal('PRIVATE_MODEL_VISITED', item.error.code);
          done();
        });
      });

      it('should return for logined users if public', function(done) {
        api.Item.publicView(publicItem.id, function(err, item) {
          assert(item.hiwuUser);
          testPublicItem(item);
          assert(item.likes !== undefined);
          assert(item.liked !== undefined);
          assert(item.comments);
          done();
        });
      });

      it('should return for anonymous users if public', function(done) {
        var accessToken = api.accessToken;
        api.accessToken = null;
        api.Item.publicView(publicItem.id, function(err, item) {
          assert(item.hiwuUser);
          testPublicItem(item);
          assert(item.likes !== undefined);
          assert(item.liked === undefined);
          assert(item.comments);
          api.accessToken = accessToken;
          done();
        });
      });
    });
  });

  describe('Today', function () {
    describe('#publicView', function () {
      var galleries;

      before(function(done) {
        api.Today.publicView(function(err, res) {
          galleries = res;
          done();
        });
      });

      it('should return public galleries with related models', function() {
        assert.equal(1, galleries.length);
        assert(galleries[0].hiwuUser);
        testPublicGallery(galleries[0]);
      });
    });
  });

  function init(cb) {
    api = new HiwuApi();

    async.series([
      function(cb) {
        api.HiwuUser.login({
          username: 'hiwu.ren',
          password: 'duludou!'
        }, 'user', cb);
      },
      function(cb) {
        hiwuUser = api.lastResult.user;
        async.parallel([
          function(cb) {
            api.HiwuUser.createGallery(api.lastResult.user.id, {
              name: 'Public Gallery'
            }, function(err, gallery) {
              publicGallery = gallery;

              api.Gallery.createItem(gallery.id, {
                name: 'Public Item',
              }, function(err, item) {
                publicItem = item;

                api.Gallery.createItem(gallery.id, {
                  name: 'Private Item',
                  public: false
                }, function(err, item) {
                  privateItem = item;

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
              privateGallery = gallery;

              api.Today.create({
                galleryId: gallery.id
              }, cb);
            });
          }
        ], cb);
      }
    ], cb);
  }

  function testPublicGallery(gallery) {
    assert(gallery.public);
    assert(gallery.items);
    for(var i in gallery.items)
      testPublicItem(gallery.items[i]);
  }

  function testPublicItem(item) {
    assert(item.public);
    assert(item.photos);
  }
});
