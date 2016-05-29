module.exports = function (app, cb) {
  var db = app.datasources.db

  if (db.connected) {
    migrate()
  } else {
    db.once('connected', migrate)
  }

  function migrate () {
    if (app.get('env') === 'staging') {
      autoupdate()
    } else if (app.get('env') === 'production') {
      autoupdate()
    } else {
      cb()
    }
  }

  /* eslint-disable no-unused-vars */

  function automigrate () {
    db.automigrate(cb)
  }

  function autoupdate () {
    db.isActual(function (err, actual) {
      if (err) throw err

      if (actual) {
        cb()
      } else {
        db.autoupdate(cb)
      }
    })
  }

  /* eslint:enable no-unused-vars */
}
