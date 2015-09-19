var multiparty = require('multiparty');
var fs = require('fs');

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
          password: username
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
