module.exports = function(app) {
  var db = app.datasources.db;

  if (app.get('env') == 'test') {
    db.automigrate(function(err) {
      if (err) throw err;
    });
  } else if (app.get('env') == 'production') {
    db.isActual(function(err, actual) {
      if (!actual) {
        db.autoupdate(function(err, result) {
          if (err) throw err;
        });
      }
    });
  }
};
