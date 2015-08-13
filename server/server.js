var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

// Define the data source
if (process.env.DATABASE_URL) {
  var databaseUrlSegs = process.env.DATABASE_URL.split(/[\/:@]+/);
  app.dataSource('db', {
    name: 'db',
    connector: 'mysql',
    host: databaseUrlSegs[3],
    username: databaseUrlSegs[1],
    password: databaseUrlSegs[2],
    database: databaseUrlSegs[4]
  });
}
else {
  app.dataSource('db', {
    name: 'db',
    connector: 'memory'
  });
}

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Environment: %s', app.get('env'));
    console.log('Listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
