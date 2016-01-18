var fs = require('fs');

task('default', ['client:build', 'client:copy', 'client:inject']);

namespace('client', function() {
  desc('Build bundle files');
  task('build', {async: true}, function(done) {
    var cwd = process.cwd();

    process.chdir('../hiwu-web/');
    jake.exec('npm run build', {printStdout: true}, function () {
      process.chdir(cwd);
      complete();
    });
  });

  desc('Copy static files to /client');
  task('copy', function() {
    fs.readdirSync('client').forEach(function(filename) {
      fs.unlink('client/' + filename);
    });

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
