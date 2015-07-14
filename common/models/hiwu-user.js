module.exports = function(HiwuUser) {
  HiwuUser.simpleLogin = function(username, include, fn) {
    var self = this;

    self.login({ username: username, password: username }, function (err, token) {
      if (err) self.create({ username: username, email: 'no-reply@hiwu.ren', password: username }, function (err, obj) {
          if (err) return fn(err);
          self.login({ username: username, password: username }, function (err, token) { fn(err, token); })
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
};
