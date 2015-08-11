api = require('./api')
fs  = require('fs')
yml = require('js-yaml')

namespace 'fixtures', ->
  desc 'Load fixtures'
  task 'load', ->
    api.hostname = '0.0.0.0'
    api.port = 3000
    api.debugger.api = true

    fixtures = yml.load(fs.readFileSync('jakelib/fixtures/fixtures.yml').toString())
    for username of fixtures
      api.simpleLogin username, (user) ->
        fixtures[username].galleries.forEach (gallery) ->
          items = gallery.items
          delete gallery.items
          api.addGalleryToUser gallery, user, (gallery) ->
            items.forEach (item) ->
              photos = item.photos
              delete item.photos
              api.addItemToGallery item, gallery, (item) ->
                photos.forEach (photo) ->
                  photo.data = fs.readFileSync("jakelib/fixtures/#{photo.data}").toString('binary')
                  api.addPhotoToItem photo, item
