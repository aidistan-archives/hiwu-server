http = require('http')

api = module.exports =
  accessToken: null
  debugger:
    border: false
    api:    false
    status: false
    header: false
    body:   false
  hostname: '0.0.0.0'
  port: 3000

api.simpleLogin = (username, next) ->
  console.log('====================') if api.debugger.border

  options =
    hostname: api.hostname
    port: api.port
    path: "/api/HiwuUsers/simpleLogin?username=#{username}&include=user"
    method: 'POST'
  console.log("API: #{options.method} #{options.path}") if api.debugger.api

  req = http.request options, (res) ->
    console.log('STATUS: ' + res.statusCode) if api.debugger.status
    console.log('HEADERS: ' + JSON.stringify(res.headers)) if api.debugger.header

    res.setEncoding('utf8');
    res.on 'data', (chunk) ->
      console.log('BODY: ' + chunk) if api.debugger.body
      accessToken = JSON.parse(chunk)
      api.accessToken = accessToken.id
      if next then next(accessToken.user) else api.end()

  req.on 'error', (e) ->
    console.log('problem with request: ' + e.message)

  req.end();

api.addGalleryToUser = (data, user, next)->
  console.log('====================') if api.debugger.border
  data = JSON.stringify(data)

  options =
    hostname: api.hostname
    port: api.port
    path: "/api/HiwuUsers/#{user.id}/galleries"
    method: 'POST'
    headers:
      'Content-Type': 'application/json'
  console.log("API: #{options.method} #{options.path}") if api.debugger.api
  options.path += "?access_token=#{api.accessToken}"

  req = http.request options, (res) ->
    console.log('STATUS: ' + res.statusCode) if api.debugger.status
    console.log('HEADERS: ' + JSON.stringify(res.headers)) if api.debugger.header

    res.setEncoding('utf8');
    res.on 'data', (chunk) ->
      console.log('BODY: ' + chunk) if api.debugger.body
      gallery = JSON.parse(chunk)
      if next then next(gallery) else api.end()

  req.on 'error', (e) ->
    console.log('problem with request: ' + e.message);

  # write data to request body
  req.write(data);
  req.end();

api.addItemToGallery = (data, gallery, next) ->
  console.log('====================') if api.debugger.border
  data = JSON.stringify(data)

  options =
    hostname: api.hostname
    port: api.port
    path: "/api/Galleries/#{gallery.id}/items"
    method: 'POST'
    headers:
      'Content-Type': 'application/json'
  console.log("API: #{options.method} #{options.path}") if api.debugger.api
  options.path += "?access_token=#{api.accessToken}"

  req = http.request options, (res) ->
    console.log('STATUS: ' + res.statusCode) if api.debugger.status
    console.log('HEADERS: ' + JSON.stringify(res.headers)) if api.debugger.header

    res.setEncoding('utf8');
    res.on 'data', (chunk) ->
      console.log('BODY: ' + chunk) if api.debugger.body
      item = JSON.parse(chunk)
      if next then next(item) else api.end()

  req.on 'error', (e) ->
    console.log('problem with request: ' + e.message);

  # write data to request body
  req.write(data);
  req.end();

api.addPhotoToItem = (data, item, next) ->
  console.log('====================') if api.debugger.border
  data = JSON.stringify(data)

  options =
    hostname: api.hostname
    port: api.port
    path: "/api/Items/#{item.id}/photos"
    method: 'POST'
    headers:
      'Content-Type': 'application/json'
  console.log("API: #{options.method} #{options.path}") if api.debugger.api
  options.path += "?access_token=#{api.accessToken}"

  req = http.request options, (res) ->
    console.log('STATUS: ' + res.statusCode) if api.debugger.status
    console.log('HEADERS: ' + JSON.stringify(res.headers)) if api.debugger.header

    res.setEncoding('utf8');
    res.on 'data', (chunk) ->
      console.log('BODY: ' + chunk) if api.debugger.body
      photo = JSON.parse(chunk)
      if next then next(photo) else api.end()

  req.on 'error', (e) ->
    console.log('problem with request: ' + e.message);

  # write data to request body
  req.write(data);
  req.end();

api.deletePhotoFromItem = (photo, item, next) ->
  console.log('====================') if api.debugger.border
  data = JSON.stringify(data)

  options =
    hostname: api.hostname
    port: api.port
    path: "/api/Items/#{item.id}/photos/#{photo.id}"
    method: 'DELETE'
  console.log("API: #{options.method} #{options.path}") if api.debugger.api
  options.path += "?access_token=#{api.accessToken}"

  req = http.request options, (res) ->
    console.log('STATUS: ' + res.statusCode) if api.debugger.status
    console.log('HEADERS: ' + JSON.stringify(res.headers)) if api.debugger.header

    res.setEncoding('utf8');
    res.resume();
    if next then next() else api.end()

  req.on 'error', (e) ->
    console.log('problem with request: ' + e.message);

  req.end();

api.deleteAllPhotosFromItem = (item, next) ->
  console.log('====================') if api.debugger.border
  data = JSON.stringify(data)

  options =
    hostname: api.hostname
    port: api.port
    path: "/api/Items/#{item.id}/photos"
    method: 'DELETE'
  console.log("API: #{options.method} #{options.path}") if api.debugger.api
  options.path += "?access_token=#{api.accessToken}"

  req = http.request options, (res) ->
    console.log('STATUS: ' + res.statusCode) if api.debugger.status
    console.log('HEADERS: ' + JSON.stringify(res.headers)) if api.debugger.header

    res.setEncoding('utf8');
    res.resume();
    if next then next() else api.end()

  req.on 'error', (e) ->
    console.log('problem with request: ' + e.message);

  req.end();

api.end = ->
  console.log('====================') if api.debugger.border
