module.exports = function(Gallery) {
  // Create userId for items
  Gallery.beforeRemote('prototype.__create__items', function(ctx, item, next) {
    ctx.req.body.userId = ctx.req.accessToken.userId;
    next();
  });
};
