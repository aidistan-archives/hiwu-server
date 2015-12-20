var fs = require('fs');

task('default', ['client:update']);

namespace('client', function() {
  desc('Update static files in /client');
  task('update', function() {
    fs.readdirSync('client').forEach(function(filename) {
      fs.unlink('client/' + filename);
    });
    fs.readdirSync('../hiwu-web/static').forEach(function(filename) {
      fs.writeFileSync('client/' + filename, fs.readFileSync('../hiwu-web/static/' + filename));
    });
  });
});
