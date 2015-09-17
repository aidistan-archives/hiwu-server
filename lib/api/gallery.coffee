needle = require('needle')

class Gallery
  constructor: (@api) ->

  createItem: (gallery, data, next) ->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/Galleries/#{gallery.id}/items"
    console.log('POST: ' + path) if api.debugger.api
    path += "?access_token=#{api.accessToken}"

    needle.post api.url(path), data, (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if api.debugger.body
        console.log('BODY: ' + JSON.stringify(res.body))
      if next then next(res.body) else api.end()

module.exports = Gallery
