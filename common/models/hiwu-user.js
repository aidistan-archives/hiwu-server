var multiparty = require('multiparty');
var fs = require('fs');

module.exports = function(HiwuUser) {
  HiwuUser.simpleLogin = function(username, include, fn) {
    var self = this;

    self.login({ username: username, password: username }, include, function (err, token) {
      if (err) self.create({ username: username, email: username + '@example.com', password: username }, function (err, obj) {
          if (err) return fn(err);
          self.login({ username: username, password: username }, include, function (err, token) { fn(err, token); })
        });
      else
        fn(err, token)
    });
  };

  HiwuUser.remoteMethod(
    'simpleLogin',
    {
      description: 'Login a user with username simply.',
      accepts: [
        {arg: 'username', type: 'string', required: true, http: {source: 'query'}},
        {arg: 'include', type: ['string'], http: {source: 'query' },
          description: [
            'Related objects to include in the response. ',
            'See the description of return value for more details.'
          ]
        }
      ],
      returns: {
        arg: 'accessToken', type: 'object', root: true,
        description: [
          'The response body contains properties of the AccessToken created on login.\n',
          'Depending on the value of `include` parameter, the body may contain ',
          'additional properties:\n\n',
          '  - `user` - `{User}` - Data of the currently logged in user. (`include=user`)\n\n'
        ]
      },
      http: {verb: 'post'}
    }
  );

  HiwuUser.prototype.updateAvatar = function(req, cb) {
    new multiparty.Form().parse(req, function(err, data, files) {
      if (err) cb(err, null);

      req.remotingContext.instance.updateAttributes(data, function(err, user) {
        var oss  = HiwuUser.app.aliyun.oss;
        var file = files.avatar[0];

        if (!err) {
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
              console.log('Error raised when uploading a photo to Aliyun OSS:', err);
            }

            // Cleanup after uploading
            for (i in files) for (j in files[i])
              fs.unlink(files[i][j].path, function (err) { if (err) throw err; });
          });
        }

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
};
