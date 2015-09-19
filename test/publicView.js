var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var needle = require('needle');
var spawn = require('child_process').spawn;

describe('HiwuApi', function () {
  var api;
  var server;

  var hiwuUser;
  var privateGallery;
  var publicGallery;
  var privateItem;
  var publicItem;

  before(function(done) {
    server = spawn('node', ['.']);

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
        assert(hiwuUser.galleries[0].public);
        assert(hiwuUser.galleries[0].items);
      });

      it('should return public items', function() {
        var items = hiwuUser.galleries[0].items;

        assert.equal(1, items.length);
        assert(items[0].public);
        assert(items[0].photos);
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
          assert.equal(publicGallery.id, gallery.id);
          assert.equal('Public Gallery', gallery.name);
          assert(gallery.hiwuUser);
          assert.equal('Public Item', gallery.items[0].name);
          done();
        });
      });

      it('should return with public items', function(done) {
        api.Gallery.publicView(publicGallery.id, function(err, gallery) {
          assert.equal(1, gallery.items.length);
          assert.equal('Public Item', gallery.items[0].name);
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

      it('should return if public', function(done) {
        api.Item.publicView(publicItem.id, function(err, item) {
          assert.equal(publicItem.id, item.id);
          assert.equal('Public Item', item.name);
          assert(item.hiwuUser);
          assert(item.likes === 0);
          assert(!item.liked);
          assert(item.photos);
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

        var gallary = galleries[0];
        assert(gallary.public);
        assert(gallary.hiwuUser);
        assert(gallary.items);
      });

      it('should return public items with related models', function() {
        assert.equal(1, galleries[0].items.length);

        var item = galleries[0].items[0];
        assert(item.public);
        assert(item.photos);
      });
    });
  });
});
