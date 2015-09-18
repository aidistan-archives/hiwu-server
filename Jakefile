// var fs = require('fs');
// var yml = require('js-yaml');
// var HiwuApi = require('./test/hiwu-api-lib');

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
