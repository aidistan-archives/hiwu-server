var loopback = require('loopback')

module.exports = function (Like) {
  Like.on('dataSourceAttached', function (obj) {
    var create = Like.create
    Like.create = function (data, options, cb) {
      create.apply(Like, [data, options, function (err, like) {
        if (err) return cb(err)

        Like.app.models.Item.findById(like.itemId, {
          fields: ['userId']
        }, function (err, item) {
          if (err) return cb(err)

          var fromId = loopback.getCurrentContext().get('accessToken').userId
          var userId = item.userId

          if (fromId === userId) {
            cb(err, like)
          } else {
            Like.app.models.Notification.create({
              type: 'ITEM_LIKE',
              userId: userId,
              fromId: fromId,
              itemId: like.itemId
            }, {}, function (err, notification) {
              cb(err, like)
            })
          }
        })
      }])
    }
  })
}
