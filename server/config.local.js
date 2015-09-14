var p = require('../package.json');
var major = p.version.split('.').shift();

module.exports = {
  restApiRoot: '/api' + (major > 0 ? '/v' + major : '')
};
