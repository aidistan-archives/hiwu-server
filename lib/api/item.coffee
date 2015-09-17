needle = require('needle')

class Item
  constructor: (@api) ->

  createPhoto: (item, data, next) ->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/Items/#{item.id}/photos"
    console.log('POST: ' + path) if api.debugger.api
    path += "?access_token=#{api.accessToken}"

    needle.post api.url(path), data,
      multipart: true
    , (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if api.debugger.body
        console.log('BODY: ' + JSON.stringify(res.body))
      if next then next(res.body) else api.end()

  destroyPhoto: (item, photo, next) ->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/Items/#{item.id}/photos/#{photo.id}"
    console.log('DELETE: ' + path) if api.debugger.api
    path += "?access_token=#{api.accessToken}"

    needle.delete api.url(path), null, (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if next then next() else api.end()

  destroyAllPhotos: (item, next) ->
    api = @api
    console.log('====================') if api.debugger.border
    path = "/api/Items/#{item.id}/photos"
    console.log('DELETE: ' + path) if api.debugger.api
    path += "?access_token=#{api.accessToken}"

    needle.delete api.url(path), null, (err, res) ->
      if err then throw err
      if api.debugger.status
        console.log('STATUS: ' + res.statusCode)
      if next then next() else api.end()

module.exports = Item
