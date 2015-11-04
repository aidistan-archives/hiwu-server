var fs = require('fs');

namespace('client', function() {
  desc('Update static files in /client');
  task('update', function() {
    fs.readdirSync('client').forEach(function(filename) {
      fs.unlink('client/' + filename);
    });
    fs.readdirSync('../hiwu-spa/static').forEach(function(filename) {
      fs.writeFileSync('client/' + filename, fs.readFileSync('../hiwu-spa/static/' + filename));
    });
  });
});
