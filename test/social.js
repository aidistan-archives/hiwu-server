var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var needle = require('needle');
var spawn = require('child_process').spawn;

describe('Integration Test: social behaviours', function() {
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

  describe('Item', function() {
    var api = new HiwuApi();

    var ownerToken;
    var guestToken;
    var item;

    before(function(done) {
      async.series([
        function(cb) {
          api.HiwuUser.login({
            username: 'hiwu.ren',
            password: 'duludou!'
          }, 'user', function(err, accessToken) {
            ownerToken = accessToken;
            cb();
          });
        },
        function(cb) {
          api.HiwuUser.createGallery(api.lastResult.user.id, {
            name: 'Gallery'
          }, cb);
        },
        function(cb) {
          api.Gallery.createItem(api.lastResult.id, {
            name: 'Item'
          }, function(err, res) {
            item = res;
            cb();
          });
        },
        function(cb) {
          api.accessToken = null;
          api.HiwuUser.simpleLogin('aidistan', 'user', function(err, accessToken) {
            guestToken = accessToken;
            done();
          });
        }
      ], done);
    });

    describe('#linkLike', function() {
      it('should not link if unauthorized', function(done) {
        api.HiwuUser.linkLike(ownerToken.user.id, item.id, function(err, res) {
          assert.equal(401, res.error.statusCode);
          assert.equal('AUTHORIZATION_REQUIRED', res.error.code);
          done();
        });
      });

      it('should link if authorized', function(done) {
        api.HiwuUser.linkLike(guestToken.user.id, item.id, function(err, res) {
          api.Item.publicView(item.id, function(err, item) {
            assert.equal(1, item.likes);
            assert(item.liked);
            done();
          });
        });
      });
    });

    describe('#unlinkLike', function() {
      before(function(done) {
        api.HiwuUser.linkLike(guestToken.user.id, item.id, done);
      });

      it('should not unlink if unauthorized', function(done) {
        api.HiwuUser.unlinkLike(ownerToken.user.id, item.id, function(err, res) {
          assert.equal(401, res.error.statusCode);
          assert.equal('AUTHORIZATION_REQUIRED', res.error.code);
          done();
        });
      });

      it('should unlink if authorized', function(done) {
        api.HiwuUser.unlinkLike(guestToken.user.id, item.id, function(err, res) {
          api.Item.publicView(item.id, function(err, item) {
            assert.equal(0, item.likes);
            assert(!item.liked);
            done();
          });
        });
      });
    });

    describe('#createComment', function() {
      it('should create comment for authenticated users', function(done) {
        api.Item.createComment(item.id, {
          content: 'Fabulours!'
        }, function(err, comment) {
          api.Item.publicView(item.id, function(err, item) {
            assert.equal(1, item.comments.length);
            done();
          });
        });
      });

      it('should note create comment for unauthenticated users', function(done) {
        api.accessToken = null
        api.Item.createComment(item.id, {
          content: 'Fabulours!'
        }, function(err, res) {
          api.accessToken = guestToken;
          assert.equal(401, res.error.statusCode);
          assert.equal('AUTHORIZATION_REQUIRED', res.error.code);
          done();
        });
      });
    });
  });
});
