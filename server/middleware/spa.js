module.exports = function(options) {
  return function(req, res, next) {
    // Whether to enable HTML5 history mode for SPA
    if (options.history) {
      res.sendfile('client/index.html');
    } else {
      next();
    }
  };
};
