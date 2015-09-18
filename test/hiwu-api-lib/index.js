function HiwuApi(host, port) {
  this.host = host || '0.0.0.0';
  this.port = port || '3000';

  this.accessToken = null;
  this.lastResult = undefined,
  this.debugger = {
    border: false,
    api: false,
    status: false,
    body: false
  };

  this.HiwuUser = new (require('./hiwu-user'))(this);
  this.Gallery  = new (require('./gallery'))(this);
  this.Item     = new (require('./item'))(this);
  this.Today    = new (require('./today'))(this);
}

HiwuApi.prototype = {
  config: function(cb) {
    var rl = require('readline').createInterface({
      input: process.stdin,
      output:process.stdout
    });

    rl.question('Which host? (' + this.host + ')', function(host) {
      if (host.length > 0)
        this.host = host;

      rl.question('Which port? (' + this.port + ')', function(port) {
        if (port.length > 0)
          this.port = port;

        rl.close();
        cb(null);
      });
    });
  },

  url: function(path) {
    path = path || '';
    return 'http://' + this.host + ':' + this.port + path;
  },

  end: function() {
    if (this.debugger.border)
      console.log('====================');
  }
};

module.exports = HiwuApi;
