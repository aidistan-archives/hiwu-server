var fs = require('fs');
var https = require('https');
var multiparty = require('multiparty');

module.exports = function(HiwuUser) {
  HiwuUser.simpleLogin = function(username, include, cb) {
    var self = this;

    self.login({
      email: username + '@simple.hiwu.ren',
      password: username
    }, include, function (err, token) {
      if (err) {
        self.create({
          email: username + '@simple.hiwu.ren',
          password: username,
          nickname: username
        }, function (err, obj) {
          if (err) return cb(err);
          self.login({
            email: username + '@simple.hiwu.ren',
            password: username
          }, include, function (err, token) {
            cb(err, token);
          });
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

  HiwuUser.codeLogin = function(code, state, cb) {
    https.get(
      'https://api.weixin.qq.com/sns/oauth2/access_token?' +
      'appid=wx92f55323cbadd8e8&secret=d4624c36b6795d1d99dcf0547af5443d&' +
      'code=' + code + '&grant_type=authorization_code',
      function(res) {
        res.on('data', function(data) {
          var unionid = JSON.parse(data).unionid;
          if (unionid === undefined) return cb(new Error('Invalid code given'));

          HiwuUser.find({
            where: { unionid: unionid }
          }, function(err, users) {
            // TODO: If exist, then login
            // TODO: if non-exist, then create and login
            cb(err, users);
          });
        });
        cb(null, {});
      }
    );
  };

  HiwuUser.remoteMethod(
    'codeLogin',
    {
      description: 'Login a user with Weixin code.',
      accepts: [
        {
          arg: 'code', type: 'string', required: true,
          http: {source: 'query'}
        },
        {
          arg: 'state', type: 'string',
          http: {source: 'query' }
        }
      ],
      returns: {
        arg: 'accessToken', type: 'object', root: true
      },
      http: {verb: 'get'}
    }
  );

  HiwuUser.prototype.updateAvatar = function(req, cb) {
    new multiparty.Form().parse(req, function(err, data, files) {
      if (err) return cb(err);

      req.remotingContext.instance.updateAttributes(data, function(err, user) {
        if (err) return cb(err);

        var oss  = HiwuUser.app.aliyun.oss;
        var file = files.avatar[0];

        // Update the avatar url
        user.updateAttribute('avatar', oss.makeUrl('avatar', user.id));

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

        cb(err, user);
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
