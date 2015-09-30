module.exports = function(app) {
  app.models.HiwuUser.create({
    username: 'hiwu.ren', email: 'hiwu.ren@hiwu.ren', password: 'duludou!'
  }, function(err, user) {
      if (err) return;

      app.models.Role.create({
        name: 'admin'
      }, function(err, role) {
        if (err) return;

        role.principals.create({
          principalType: app.models.RoleMapping.USER,
          principalId: user.id
        }, function(err, principal) {});
      });
  });
};
