module.exports = function(Item) {
  // Add userId for items
  Item.on('dataSourceAttached', function(obj){
    var context = this;
    var create  = Item.create;
    Item.create = function(data, options, cb) {
      Item.app.models.Gallery.findById(data.galleryId, function(err, obj) {
        if (err || obj == null) {
          cb(err, obj);
        } else {
          data.userId = obj.userId;
          create.apply(Item, [data, options, function(err, obj) {
            return(cb(err, obj));
          }]);
        }
      });
    };
  });
};
