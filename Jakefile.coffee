http        = require('http')
querystring = require('querystring')

# Global variables
access_token = null

# Entrance
desc 'Run all test tasks in a pre-defined order'
task 'default', ->
  jake.Task['test:login:simple'].invoke()

# Exit
task 'test', ->
  console.log('====================')

# All subtasks
namespace 'test', ->
  namespace 'login', ->
    task 'simple', ->
      console.log('====================')
      console.log('API: POST /HiwuUsers/simpleLogin')

      options =
        hostname: '0.0.0.0'
        port: 3000
        path: '/api/HiwuUsers/simpleLogin?username=aidistan'
        method: 'POST'
        headers:
          'Content-Type': 'application/x-www-form-urlencoded'

      req = http.request options, (res) ->
        console.log('STATUS: ' + res.statusCode)
        console.log('HEADERS: ' + JSON.stringify(res.headers))

        res.setEncoding('utf8');
        res.on 'data', (chunk) ->
          console.log('BODY: ' + chunk)

          access_token = JSON.parse(chunk).id
          jake.Task['test:gallery'].invoke()

      req.on 'error', (e) ->
        console.log('problem with request: ' + e.message)

      req.end();

  task 'gallery', ->
    console.log('====================')
    console.log('API: POST /HiwuUsers/{id}/galleries')

    postData = querystring.stringify
      name: 'Gallery1'

    options =
      hostname: '0.0.0.0'
      port: 3000
      path: '/api/HiwuUsers/1/galleries?access_token=' + access_token
      method: 'POST'
      headers:
        'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Length': postData.length

    req = http.request options, (res) ->
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));

      res.setEncoding('utf8');
      res.on 'data', (chunk) ->
        console.log('BODY: ' + chunk);
        jake.Task['test:item'].invoke()

    req.on 'error', (e) ->
      console.log('problem with request: ' + e.message);

    # write data to request body
    req.write(postData);
    req.end();

  task 'item', ->
    console.log('====================')
    console.log('API: post /Galleries/{id}/items')

    postData = querystring.stringify
      name: 'Item1'

    options =
      hostname: '0.0.0.0'
      port: 3000
      path: '/api/Galleries/1/items?access_token=' + access_token
      method: 'POST'
      headers:
        'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Length': postData.length

    req = http.request options, (res) ->
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));

      res.setEncoding('utf8');
      res.on 'data', (chunk) ->
        console.log('BODY: ' + chunk);
        jake.Task['test'].invoke()

    req.on 'error', (e) ->
      console.log('problem with request: ' + e.message);

    # write data to request body
    req.write(postData);
    req.end();
