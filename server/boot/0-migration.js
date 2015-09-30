module.exports = function(app, cb) {
  var db = app.datasources.db;

  if (app.get('env') === 'test') {
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
};
