class API
  constructor: (@host, @port)->
    @accessToken = null
    @debugger =
      border: false
      api:    false
      status: false
      body:   false
    @host ||= '0.0.0.0'
    @port ||= '3000'

    @HiwuUser = new (require('./hiwu-user'))(this)
    @Gallery  = new (require('./gallery'))(this)
    @Item     = new (require('./item'))(this)

  config: (next) ->
    api = this
    rl = require('readline').createInterface
      input: process.stdin
      output:process.stdout
    rl.question "Which host? (#{api.host})", (host) ->
      api.host = host if host.length > 0
      rl.question "Which port? (#{api.port})", (port) ->
        api.port = port if port.length > 0
        rl.close()
        if next then next()

  url: (path) ->
    "http://#{@host}:#{@port}#{path}"

  end: ->
    console.log '====================' if @debugger.border

module.exports = API
