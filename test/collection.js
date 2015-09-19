var HiwuApi = require('./hiwu-api-lib');
var async = require('async');
var assert = require('assert');
var needle = require('needle');
var spawn = require('child_process').spawn;

describe('HiwuApi', function () {
  describe('Collection', function() {
    var api;
    var server;

    var collection;

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
            api.Collection.create({
              name: 'Collection',
              description: 'This is a collection.'
            }, cb);
          },
          function(cb) {
            collection = api.lastResult;
            api.Collection.createItem(collection.id, {
              name: 'Public Item'
            }, cb);
          },
          function(cb) {
            api.Collection.createItem(collection.id, {
              name: 'Private Item',
              public: false
            }, cb);
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

    describe('#find', function () {
      it('should return collections with public items and private items', function(done) {
        api.Collection.find({
          include: 'items'
        }, function(err, collections) {
          assert.equal(1, collections.length);
          assert.equal(2, collections[0].items.length);
          done();
        });
      });
    });

    describe('#findById', function () {
      it('should return with public items and private items', function(done) {
        api.Collection.findById(collection.id, {
          include: 'items'
        }, function(err, collection) {
          assert.equal(2, collection.items.length);
          done();
        });
      });
    });

    describe('#__create__items', function () {
      it('should not work for unauthenticated users', function(done) {
        var accessToken = api.accessToken;
        api.accessToken = null;
        api.Collection.createItem(collection.id, {
          name: 'Collection',
          description: 'This is a collection.'
        }, function(err, res) {
          assert(res.error);
          assert.equal(401, res.error.statusCode);
          assert.equal('AUTHORIZATION_REQUIRED', res.error.code);
          done();
        });
      });
    });
  });
});
