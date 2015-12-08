var fs = require('fs');
var qs = require('querystring');
var http  = require('http');
var https = require('https');
var multiparty = require('multiparty');

module.exports = function(HiwuUser) {
  HiwuUser.simpleLogin = function(username, include, cb) {
    var self = this;

    self.login({
      email: username + '@example.com', password: username
    }, include, function (err, token) {
      if (err) {
        self.create({
          email: username + '@example.com', password: username
        }, function (err, obj) {
          if (err) return cb(err);
          self.login({
            email: username + '@example.com', password: username
          }, include, cb);
        });
      }
      else {
        cb(err, token);
      }
    });
  };

  HiwuUser.remoteMethod(
    'simpleLogin',
    {
      description: 'Login a user with username simply.',
      accepts: [
        {
          arg: 'username', type: 'string', required: true,
          http: {source: 'query'}
        },
        {
          arg: 'include', type: ['string'],
          http: {source: 'query' }
        }
      ],
      returns: {
        arg: 'accessToken', type: 'object', root: true
      },
      http: {verb: 'post'}
    }
  );

  HiwuUser.weixinLogin = function(code, include, cb) {
    https.get(
      'https://api.weixin.qq.com/sns/oauth2/access_token?' + qs.stringify({
        appid: 'wx92f55323cbadd8e8',
        secret: 'd4624c36b6795d1d99dcf0547af5443d',
        grant_type: 'authorization_code',
        code: code
      }), function(res) { res.on('data', function(data) {
        data = JSON.parse(data);
        var uid = data.unionid;
        if (uid === undefined) return cb(new Error('Invalid code given'));

        HiwuUser.findOne({
          where: { wx_uid: uid }
        }, function(err, user) {
          if (user) {
            HiwuUser.login({
              email: uid + '@weixin.qq.com', password: uid
            }, include, cb);
          } else {
            // Fetch user info from Weixin
            https.get('https://api.weixin.qq.com/sns/userinfo?' + qs.stringify({
              access_token: data.access_token,
              openid: data.openid
            }), function(res) { res.on('data', function(data) {
              data = JSON.parse(data);

              // Create the non-existing user
              HiwuUser.create({
                email: uid + '@weixin.qq.com', password: uid,
                nickname: data.nickname, avatar: data.headimgurl, wx_uid: uid
              }, function(err, user) {
                if (err) return cb(err);

                user.updateAvatarByUrl(data.headimgurl, function(err, user) {
                  HiwuUser.login({
                    email: uid + '@weixin.qq.com', password: uid
                  }, include, cb);
                });
              });
            }); });
          }
        });
      }); }
    );
  };

  HiwuUser.remoteMethod(
    'weixinLogin',
    {
      description: 'Login a user with Weixin code.',
      accepts: [
        {
          arg: 'code', type: 'string', required: true,
          http: {source: 'query'}
        },
        {
          arg: 'include', type: ['string'],
          http: {source: 'query' }
        }
      ],
      returns: {
        arg: 'accessToken', type: 'object', root: true
      },
      http: {verb: 'post'}
    }
  );

  HiwuUser.weiboLogin = function(code, include, cb) {
    var options = {
      hostname: 'api.weibo.com',
      port: 443,
      path: '/oauth2/access_token?' + qs.stringify({
        client_id: '3167931574',
        client_secret: '0615faed88913d1755cd6d85729d0860',
        grant_type: 'authorization_code',
        redirect_uri: 'http://hiwu.ren',
        code: code
      }),
      method: 'POST'
    };

    https.request(options, function(res) {
      res.on('data', function(data) {
        data = JSON.parse(data);
        var uid = data.uid;
        if (uid === undefined) return cb(new Error('Invalid code given'));

        HiwuUser.findOne({
          where: { wb_uid: uid }
        }, function(err, user) {
          if (user) {
            HiwuUser.login({
              email: uid + '@weibo.com', password: uid
            }, include, cb);
          } else {
            // Fetch user info from Weibo
            https.get('https://api.weibo.com/2/users/show.json?' + qs.stringify({
              access_token: data.access_token,
              uid: data.uid
            }), function(res) {
              var data = [];

              res.on('data', function(chunk) { data.push(chunk); });
              res.on('end',  function() {
                data = JSON.parse(Buffer.concat(data));

                // Create the non-existing user
                HiwuUser.create({
                  email: uid + '@weibo.com', password: uid,
                  nickname: data.screen_name, avatar: data.avatar_large, wb_uid: uid
                }, function(err, user) {
                  if (err) return cb(err);

                  user.updateAvatarByUrl(data.avatar_hd, function(err, user) {
                    HiwuUser.login({
                      email: uid + '@weibo.com', password: uid
                    }, include, cb);
                  });
                });
              });
            });
          }
        });
      });
    }).end();
  };

  HiwuUser.remoteMethod(
    'weiboLogin',
    {
      description: 'Login a user with Weibo code.',
      accepts: [
        {
          arg: 'code', type: 'string', required: true,
          http: {source: 'query'}
        },
        {
          arg: 'include', type: ['string'],
          http: {source: 'query' }
        }
      ],
      returns: {
        arg: 'accessToken', type: 'object', root: true
      },
      http: {verb: 'post'}
    }
  );

  HiwuUser.prototype.updateAvatarByUrl = function(url, cb) {
    var self = this;

    http.get(url, function(res) {
      var data = [];
      var oss  = HiwuUser.app.aliyun.oss;

      res.on('data', function(chunk) { data.push(chunk); });
      res.on('end',  function() {
        // Save the avatar
        oss.putObject({
          Bucket: 'hiwu',
          Key: oss.makeKey('avatar', self.id),
          Body: Buffer.concat(data),
          ContentType: res.headers['content-type']
        }, function (err, data) {
          if (err) {
            console.log('Failed to upload to Aliyun OSS:', err);
          }
        });

        // Update the avatar url
        self.updateAttribute('avatar', oss.makeUrl('avatar', self.id), cb);
      });
    });
  };

  HiwuUser.prototype.updateAvatar =
  HiwuUser.prototype.updateAvatarByFile = function(req, cb) {
    var self = this;

    new multiparty.Form().parse(req, function(err, data, files) {
      if (err) return cb(err);

      self.updateAttributes(data, function(err, user) {
        if (err) return cb(err);

        var oss  = HiwuUser.app.aliyun.oss;
        var file = files.avatar[0];

        // Save the avatar
        oss.putObject({
          Bucket: 'hiwu',
          Key: oss.makeKey('avatar', user.id),
          Body: fs.readFileSync(file.path),
          ContentType: file.headers['content-type'],
        }, function (err, data) {
          if (err) {
            console.log('Failed to upload to Aliyun OSS:', err);
          }

          // Cleanup after uploading
          for (var i in files) for (var j in files[i])
            fs.unlink(files[i][j].path, function (err) { if (err) throw err; });
        });

        // Update the avatar url
        user.updateAttribute('avatar', oss.makeUrl('avatar', user.id), cb);
      });
    });
  };

  HiwuUser.remoteMethod(
    'updateAvatar',
    {
      description: 'Upload a new avatar to this user.',
      accepts: {arg: 'req', type: 'object', http: { source: 'req' }},
      returns: {arg: 'hiwuUser', type: 'HiwuUser', root: true},
      http: {verb: 'put', path: '/avatar'},
      isStatic: false
    }
  );

  HiwuUser.prototype.publicView = function(cb) {
    HiwuUser.findById(this.id, {
      include: {
        relation: 'galleries',
        scope: {
          where: { public: true },
          include: {
            relation: 'items',
            scope: {
              where: { public: true },
              include: 'photos'
            }
          }
        }
      }
    }, cb);
  };

  HiwuUser.remoteMethod(
    'publicView',
    {
      description: 'View a public profile.',
      returns: {arg: 'hiwuUser', type: 'HiwuUser', root: true},
      http: {verb: 'get'},
      isStatic: false
    }
  );
};
