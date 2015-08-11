api = require('./jakelib/api')

desc 'Run a quick test for APIs'
task 'default', ->
  api.debugger.border = true
  api.debugger.api    = true
  api.debugger.status = true
  api.debugger.header = true
  api.debugger.body   = true

  api.simpleLogin 'aidistan', (user) ->
    api.addGalleryToUser
      name: 'Gallery1'
    , user, (gallery) ->
      api.addItemToGallery
        name: 'Item1'
      , gallery, (item) ->
        api.addPhotoToItem
          data: '123'
          type: 'text/plain'
        , item, (photo) ->
          api.deletePhotoFromItem photo, item
