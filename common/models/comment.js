var loopback = require('loopback');

module.exports = function(Comment) {
  Comment.on('dataSourceAttached', function(obj){
    var create  = Comment.create;
    Comment.create = function(data, options, cb) {
      create.apply(Comment, [data, options, function(err, comment) {
        if (err) cb(err);
        Comment.app.models.Item.findById(comment.itemId, {
           fields: ['userId']
        }, function(err, item) {
          if (err) cb(err);

          var fromId = loopback.getCurrentContext().get('accessToken').userId;
          var userId = comment.toId || item.userId;

          if (fromId === userId) {
            cb(err, comment);
          } else {
            Comment.app.models.Notification.create({
              type: comment.toId ? 'COMMENT_REPLY' : 'ITEM_COMMENT',
              userId: userId,
              fromId: fromId,
              itemId: comment.itemId,
              commentId: comment.id
            }, {}, function(err, notification) {
              cb(err, comment);
            });
          }
        });
      }]);
    };
  });
};
