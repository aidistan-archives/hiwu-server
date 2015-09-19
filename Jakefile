var HiwuApi = require('./test/hiwu-api-lib');
var async = require('async');
// var fs = require('fs');
// var yml = require('js-yaml');

task('default', function(done) {
  var api = new HiwuApi();
  api.debugger.border = true
  api.debugger.api    = true
  api.debugger.status = true
  api.debugger.body   = true

  async.series([
    function(cb) {
      api.HiwuUser.simpleLogin('aidistan', 'user', cb);
    },
    function(cb) {
      api.HiwuUser.updateAttributes(api.lastResult.user.id, {
        nickname: 'Aidi Stan'
      }, cb);
    },
    function(cb) {
      api.HiwuUser.updateAvatar(api.lastResult.id, {
        nickname: 'Aidi Stan',
        avatar: {
          file: 'seeds/chunranbeijing/chunranicon.jpg',
          content_type: 'image/jpeg'
        }
      }, cb);
    },
    function(cb) {
      api.HiwuUser.createGallery(api.lastResult.id, {
        name: 'Gallery'
      }, cb);
    },
    function(cb) {
      api.Gallery.createItem(api.lastResult.id, {
        name: 'Item'
      }, cb);
    },
    function(cb) {
      api.Item.createPhoto(api.lastResult.id, {
        data: {
          file: 'seeds/chunranbeijing/chunranicon.jpg',
          content_type: 'image/jpeg'
        }
      }, cb);
    },
  ], done);
});

// namespace 'seeds', ->
//   desc 'Check yaml files of all seeds'
//   task 'check', ->
//     fs  = require('fs')
//     yml = require('js-yaml')
//
//     fs.readdirSync('seeds').forEach (username) ->
//       seed = yml.load(
//         fs.readFileSync("seeds/#{username}/#{username}.yml").toString()
//       )
//
//       seed.galleries.forEach (gallery) ->
//         console.log('[G] ' + gallery.name)
//         gallery.items.forEach (item) ->
//           console.log('[I] ' + item.name)
//           item.photos.forEach (photo) ->
//             photo.data.file
//
//   desc 'Load all seed'
//   task 'load', ->
//     _api = new API()
//     _api.config ->
//       fs.readdirSync('seeds').forEach (username) ->
//         api = new API(_api.host, _api.port)
//         api.debugger.api = true
//
//         api.HiwuUser.login
//           username: username,
//           password: username
//         , (user) -> unless user
//           seed = yml.load(
//             fs.readFileSync("seeds/#{username}/#{username}.yml").toString()
//           )
//
//           api.HiwuUser.simpleLogin username, (user) ->
//             galleries = seed.galleries
//             delete seed.galleries
//             for gallery in galleries
//               items = gallery.items
//               delete gallery.items
//               api.HiwuUser.createGallery user, gallery, (gallery) ->
//                 for item in items
//                   photos = item.photos
//                   delete item.photos
//                   api.Gallery.createItem gallery, item, (item) ->
//                     for photo in photos
//                       api.Item.createPhoto item, photo
//
//             api.HiwuUser.updateAvatar user,
//               avatar: seed.avatar
//             delete seed.avatar
//             api.HiwuUser.update user, seed
