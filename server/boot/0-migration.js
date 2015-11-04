module.exports = function(app, cb) {
  var db = app.datasources.db;

  if(db.connected) {
    migrate();
  } else {
    db.once('connected', migrate);
  }

  function migrate() {
    if (app.get('env') === 'staging') {
      db.automigrate(cb);
    }
    else if (app.get('env') === 'production') {
      db.isActual(function(err, actual) {
        if (!actual) {
          db.autoupdate(cb);
        } else {
          cb();
        }
      });
    } else {
      cb();
    }
  }
};
