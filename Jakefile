var fs = require('fs');

task('default', ['client:copy', 'client:inject']);

namespace('client', function() {
  desc('Copy static files to /client');
  task('copy', function() {
    // Remove all files in /client
    fs.readdirSync('client').forEach(function(filename) {
      fs.unlink('client/' + filename);
    });

    // Copy static files from hiwu-web
    fs.readdirSync('../hiwu-web/static').forEach(function(filename) {
      fs.writeFileSync(
        'client/' + filename, fs.readFileSync('../hiwu-web/static/' + filename)
      );
    });
  });

  desc('Inject OneAPM Bi agent');
  task('inject', function() {
    fs.writeFileSync('client/index.ejs',
      fs.readFileSync('client/index.html', { encoding: 'utf-8' })
        .replace(
          '<!-- OneAPM Bi agent placeholder -->',
          '<%- oneapm.getBrowserTimingHeader() %>'
        )
    );
    fs.unlink('client/index.html');
  });
});
