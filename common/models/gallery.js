var loopback = require('loopback');

module.exports = function(Gallery) {
  Gallery.on('dataSourceAttached', function(obj){
    var findById = Gallery.findById;
    Gallery.findById = function () {
      var id = arguments[0];
      var cb = arguments[arguments.length - 1];
      var filter = arguments.length > 2 ? arguments[1] : undefined;

      // Get needed fields to check the permission
      findById.apply(Gallery, [id,
        { 'fileds': ['public', 'userId'] },
      function (err, obj) {
        if (err) return cb(err);
        if (obj == null) return cb(err, obj); // obj == null where not exists

        var accessToken = loopback.getCurrentContext().active.accessToken;
        if (accessToken && accessToken.userId === obj.userId) {
          findById.apply(Gallery, [id, filter, cb]);
        } else if (obj.public) {
          findById.apply(Gallery, [id, secureFilter(filter), cb]);
        } else {
          cb(err, null); // mimic a not-exists error
        }
      }]);

      // Secure the filter to make sure no private item leaks out
      function secureFilter(filter) {
        filter = filter || {};
        if (filter.include === 'items') {
          filter.include = [{
            relation: 'items',
            scope: { where: { public: true } }
          }];
        } else if (Array.isArray(filter.include)) {
          for (var i = 0; i < filter.include.length; i++) {
            var item = filter.include[i];
            if (item === 'items') {
              filter.include[i] = {
                relation: 'items',
                scope: { where: { public: true } }
              };
            } else if (item.relation === 'items') {
              item.scope = item.scope || {};
              item.scope.where = item.scope.where || {};
              item.scope.where.public = true;
              filter.include[i] = item;
            } else {
              continue;
            }
            break;
          }
        }
        return filter;
      }
    };
  });
};
