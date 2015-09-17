API = require('./lib/api')

task 'default', -> jake.Task['test'].invoke()

desc 'Run a quick test for APIs (alias: t)'
task 'test', ->
  api = new API()
  api.debugger.border = true
  api.debugger.api    = true
  api.debugger.status = true
  api.debugger.body   = true

  api.config ->
    api.HiwuUser.simpleLogin 'aidistan', (user) ->
      api.HiwuUser.update user,
        nickname: '枫林碗'
      , (user) ->
        api.HiwuUser.updateAvatar user,
          nickname: 'Aidi Stan',
          avatar:
            file: 'seeds/chunranbeijing/chunranicon.jpg'
            content_type: 'image/jpeg'
        , (user) ->
          api.HiwuUser.createGallery user,
            name: 'Gallery1'
          , (gallery) ->
            api.Gallery.createItem gallery,
              name: 'Item1'
            ,  (item) ->
              api.Item.createPhoto item,
                data:
                  file: 'seeds/chunranbeijing/chunranicon.jpg'
                  content_type: 'image/jpeg'
              , (photo) ->
                api.Item.destroyPhoto item, photo
