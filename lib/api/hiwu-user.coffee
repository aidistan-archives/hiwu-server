needle = require('needle')

class HiwuUser
  constructor: (@api) ->

  login: (data, next) ->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/HiwuUsers/login?include=user"
    console.log('POST: ' + path) if api.debugger.api

    needle.post api.url(path), data, (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if api.debugger.body
        console.log('BODY: ' + JSON.stringify(res.body))
      api.accessToken = res.body.id
      if next then next(res.body.user) else api.end()

  simpleLogin: (username, next) ->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/HiwuUsers/simpleLogin?username=#{username}&include=user"
    console.log('POST: ' + path) if api.debugger.api

    needle.post api.url(path), null, (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if api.debugger.body
        console.log('BODY: ' + JSON.stringify(res.body))
      api.accessToken = res.body.id
      if next then next(res.body.user) else api.end()

  update: (user, data, next) ->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/HiwuUsers/#{user.id}"
    console.log("PUT: #{path}") if api.debugger.api
    path += "?access_token=#{api.accessToken}"

    needle.put api.url(path), data, (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if api.debugger.body
        console.log('BODY: ' + JSON.stringify(res.body))
      if next then next(res.body) else api.end()

  # 由于 needle 目前上传 multipart 时编码存在 bug
  # 使用 updataAvatar 上传字符数据仅限 ASCII，中文字符请用 update
  updateAvatar: (user, data, next) ->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/HiwuUsers/#{user.id}/avatar"
    console.log("PUT: #{path}") if api.debugger.api
    path += "?access_token=#{api.accessToken}"

    needle.put api.url(path), data,
      multipart: true
    , (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if api.debugger.body
        console.log('BODY: ' + JSON.stringify(res.body))
      if next then next(res.body) else api.end()

  createGallery: (user, data, next)->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/HiwuUsers/#{user.id}/galleries"
    console.log('POST: ' + path) if api.debugger.api
    path += "?access_token=#{api.accessToken}"

    needle.post api.url(path), data, (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if api.debugger.body
        console.log('BODY: ' + JSON.stringify(res.body))
      if next then next(res.body) else api.end()

module.exports = HiwuUser
