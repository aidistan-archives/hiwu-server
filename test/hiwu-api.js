var HiwuApi = require('./hiwu-api-lib');
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

    api.HiwuUser.simpleLogin('aidistan', 'user', function(err, accessToken) {
      api.HiwuUser.updateAttributes(accessToken.user.id, {
        nickname: 'Aidi Stan'
      }, function(err, user) {
        api.HiwuUser.updateAvatar(user.id, {
          nickname: 'Aidi Stan',
          avatar: {
            file: 'seeds/chunranbeijing/chunranicon.jpg',
            content_type: 'image/jpeg'
          }
        }, function(err, user) {
          api.HiwuUser.createGallery(user.id, {
            name: 'Gallery'
          }, function(err, gallery) {
            api.Gallery.createItem(gallery.id, {
              name: 'Item'
            }, function(err, item) {
              api.Item.createPhoto(item.id, {
                data: {
                  file: 'seeds/chunranbeijing/chunranicon.jpg',
                  content_type: 'image/jpeg'
                }
              }, function(err, photo) {
                api.Item.deletePhoto(item.id, photo.id, done);
              });
            });
          });
        });
      });
    });
  });
});
