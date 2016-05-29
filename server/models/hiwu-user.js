var crypto = require('crypto')
var fs = require('fs')
var http = require('http')
var https = require('https')
var loopback = require('loopback')
var multiparty = require('multiparty')
var qs = require('querystring')

module.exports = function (HiwuUser) {
  HiwuUser.simpleLogin = function (username, include, cb) {
    var self = this

    self.login({
      email: username + '@example.com', password: username
    }, include, function (err, token) {
      if (err) {
        self.create({
          email: username + '@example.com', password: username
        }, function (err, obj) {
          if (err) return cb(err)
          self.login({
            email: username + '@example.com', password: username
          }, include, cb)
        })
      } else {
        cb(err, token)
      }
    })
  }

  HiwuUser.remoteMethod('simpleLogin', {
    description: 'Login a user with username simply.',
    accepts: [
      {
        arg: 'username', type: 'string', required: true,
        http: { source: 'query' }
      },
      {
        arg: 'include', type: ['string'],
        http: { source: 'query' }
      }
    ],
    returns: {
      arg: 'accessToken', type: 'object', root: true
    }
  })

  HiwuUser.weixinAccessToken = function (appid, code, cb) {
    var appid2secret = {
      'wxe0b3b148c7065252': '500128120c038cafeed8e29f94b1635e',
      'wx92f55323cbadd8e8': 'afd3d0f308010a5ae9d128f60f950e71',
      'wxe927d2e4c1058daa': 'd4624c36b6795d1d99dcf0547af5443d'
    }

    https.get(
      'https://api.weixin.qq.com/sns/oauth2/access_token?' + qs.stringify({
        appid: appid,
        secret: appid2secret[appid],
        grant_type: 'authorization_code',
        code: code
      }), function (res) {
      res.on('data', function (data) { cb(JSON.parse(data)) })
    }
    )
  }

  HiwuUser.weixinLogin = function (appid, code, include, cb) {
    HiwuUser.weixinAccessToken(appid, code, function (data) {
      var uid = data.unionid
      if (uid === undefined) return cb(new Error('Invalid code given'))

      HiwuUser.findOne({ where: { wx_uid: uid } }, function (err, user) {
        if (err) return cb(err)

        if (user) {
          HiwuUser.login({
            email: uid + '@weixin.qq.com', password: uid
          }, include, cb)
        } else {
          // Fetch user info from Weixin
          https.get('https://api.weixin.qq.com/sns/userinfo?' + qs.stringify({
            access_token: data.access_token,
            openid: data.openid
          }), function (res) {
            res.on('data', function (data) {
              data = JSON.parse(data)

              // Create the non-existing user
              HiwuUser.create({
                email: uid + '@weixin.qq.com', password: uid,
                nickname: data.nickname, avatar: data.headimgurl, wx_uid: uid
              }, function (err, user) {
                if (err) return cb(err)

                user.updateAvatarByUrl(data.headimgurl, function (err, user) {
                  if (err) return cb(err)

                  HiwuUser.login({
                    email: uid + '@weixin.qq.com', password: uid
                  }, include, cb)
                })
              })
            })
          })
        }
      })
    })
  }

  HiwuUser.remoteMethod('weixinLogin', {
    description: 'Login a user with Weixin code.',
    accepts: [
      {
        arg: 'appid', type: 'string', required: true,
        http: { source: 'query' }
      },
      {
        arg: 'code', type: 'string', required: true,
        http: { source: 'query' }
      },
      {
        arg: 'include', type: ['string'],
        http: { source: 'query' }
      }
    ],
    returns: {
      arg: 'accessToken', type: 'object', root: true
    }
  })

  HiwuUser.prototype.bindWeixin = function (appid, code, cb) {
    var self = this

    HiwuUser.weixinAccessToken(appid, code, function (data) {
      var uid = data.unionid
      if (uid === undefined) return cb(new Error('Invalid code given'))

      HiwuUser.findOne({
        where: { wx_uid: uid }
      }, function (err, user) {
        if (err) return cb(err)

        if (user) {
          return cb(new Error('Weixin user exists'))
        } else {
          self.updateAttribute('wx_uid', uid, cb)
        }
      })
    })
  }

  HiwuUser.remoteMethod('bindWeixin', {
    description: 'Bind a weixin unionid to this user.',
    accepts: [
      {
        arg: 'appid', type: 'string', required: true,
        http: {source: 'query'}
      },
      {
        arg: 'code', type: 'string', required: true,
        http: {source: 'query'}
      }
    ],
    returns: {arg: 'hiwuUser', type: 'HiwuUser', root: true},
    isStatic: false
  })

  HiwuUser.weiboAccessToken = function (appid, code, cb) {
    var appid2secret = {
      '3167931574': '0615faed88913d1755cd6d85729d0860',
      '1946198488': '69a17f653dd8ebdc88aa2b4839e8c3af'
    }

    https.request({
      hostname: 'api.weibo.com',
      port: 443,
      path: '/oauth2/access_token?' + qs.stringify({
        client_id: appid,
        client_secret: appid2secret[appid],
        grant_type: 'authorization_code',
        redirect_uri: 'http://hiwu.ren',
        code: code
      }),
      method: 'POST'
    }, function (res) {
      res.on('data', function (data) { cb(JSON.parse(data)) })
    }).end()
  }

  HiwuUser.weiboLogin = function (appid, code, include, data, cb) {
    if (code === 'skipped') {
      login(data)
    } else {
      HiwuUser.weiboAccessToken(appid, code, login)
    }

    function login (data) {
      var uid = data.uid
      if (uid === undefined) return cb(new Error('Invalid code given'))

      HiwuUser.findOne({
        where: { wb_uid: uid }
      }, function (err, user) {
        if (err) return cb(err)

        if (user) {
          HiwuUser.login({
            email: uid + '@weibo.com', password: uid
          }, include, cb)
        } else {
          // Fetch user info from Weibo
          https.get('https://api.weibo.com/2/users/show.json?' + qs.stringify({
            access_token: data.access_token,
            uid: data.uid
          }), function (res) {
            var data = []

            res.on('data', function (chunk) { data.push(chunk) })
            res.on('end', function () {
              data = JSON.parse(Buffer.concat(data))

              // Create the non-existing user
              HiwuUser.create({
                email: uid + '@weibo.com', password: uid,
                nickname: data.screen_name, avatar: data.avatar_large, wb_uid: uid
              }, function (err, user) {
                if (err) return cb(err)

                user.updateAvatarByUrl(data.avatar_hd, function (err, user) {
                  if (err) return cb(err)

                  HiwuUser.login({
                    email: uid + '@weibo.com', password: uid
                  }, include, cb)
                })
              })
            })
          })
        }
      })
    }
  }

  HiwuUser.remoteMethod('weiboLogin', {
    description: 'Login a user with Weibo code.',
    accepts: [
      {
        arg: 'appid', type: 'string', required: true,
        http: { source: 'query' }
      },
      {
        arg: 'code', type: 'string', required: true,
        http: { source: 'query' }
      },
      {
        arg: 'include', type: ['string'],
        http: { source: 'query' }
      },
      {
        arg: 'data', type: 'object', require: false,
        http: {source: 'body'}
      }
    ],
    returns: {
      arg: 'accessToken', type: 'object', root: true
    }
  })

  HiwuUser.prototype.bindWeibo = function (appid, code, cb) {
    var self = this

    HiwuUser.weiboAccessToken(appid, code, function (data) {
      var uid = data.uid
      if (uid === undefined) return cb(new Error('Invalid code given'))

      HiwuUser.findOne({
        where: { wb_uid: uid }
      }, function (err, user) {
        if (err) return cb(err)

        if (user) {
          return cb(new Error('Weibo user exists'))
        } else {
          self.updateAttribute('wb_uid', uid, cb)
        }
      })
    })
  }

  HiwuUser.remoteMethod('bindWeibo', {
    description: 'Bind a weibo id to this user.',
    accepts: [
      {
        arg: 'appid', type: 'string', required: true,
        http: {source: 'query'}
      },
      {
        arg: 'code', type: 'string', required: true,
        http: {source: 'query'}
      }
    ],
    returns: {arg: 'hiwuUser', type: 'HiwuUser', root: true},
    isStatic: false
  })

  HiwuUser.prototype.renew = function (cb) {
    this.accessTokens.create({ ttl: 1209600 }, function (err, accessToken) {
      if (err) return cb(err)

      HiwuUser.logout(loopback.getCurrentContext().get('accessToken').id, function (err) {
        if (err) { cb(err) } else { cb(null, accessToken) }
      })
    })
  }

  HiwuUser.remoteMethod('renew', {
    description: 'Renew the access token of this user.',
    returns: {arg: 'accessToken', type: 'AccessToken', root: true},
    http: {verb: 'get', path: '/renew'},
    isStatic: false
  })

  HiwuUser.prototype.updateAvatarByUrl = function (url, cb) {
    var self = this

    http.get(url, function (res) {
      var data = []
      var oss = HiwuUser.app.aliyun.oss

      res.on('data', function (chunk) { data.push(chunk) })
      res.on('end', function () {
        var body = Buffer.concat(data)
        var hash = crypto.createHash('md5').update(body).digest('hex')
        var name = self.id + '_' + hash

        // Save the avatar
        oss.putObject({
          Bucket: 'hiwu',
          Key: oss.makeKey('avatar', name),
          Body: body,
          ContentType: res.headers['content-type']
        }, function (err, data) {
          if (err) {
            console.log('Failed to upload to Aliyun OSS:', err)
          }
        })

        // Update the avatar url
        self.updateAttribute('avatar', oss.makeImgUrl('avatar', name), cb)
      })
    })
  }

  HiwuUser.prototype.updateAvatar =
  HiwuUser.prototype.updateAvatarByFile = function (req, cb) {
    var self = this

    new multiparty.Form().parse(req, function (err, data, files) {
      if (err) return cb(err)

      var oss = HiwuUser.app.aliyun.oss
      var file = files.data[0]
      var body = fs.readFileSync(file.path)
      var hash = crypto.createHash('md5').update(body).digest('hex')
      var name = self.id + '_' + hash

      // Save the avatar
      oss.putObject({
        Bucket: 'hiwu',
        Key: oss.makeKey('avatar', name),
        Body: body,
        ContentType: file.headers['content-type']
      }, function (err, data) {
        if (err) {
          console.log('Failed to upload to Aliyun OSS:', err)
        }

        // Cleanup after uploading
        for (var i in files) {
          for (var j in files[i]) {
            fs.unlink(files[i][j].path, function (err) { if (err) throw err })
          }
        }
      })

      // Update the avatar url
      self.updateAttribute('avatar', oss.makeImgUrl('avatar', name), cb)
    })
  }

  HiwuUser.remoteMethod('updateAvatar', {
    description: 'Upload a new avatar to this user.',
    accepts: {arg: 'req', type: 'object', http: { source: 'req' }},
    returns: {arg: 'hiwuUser', type: 'HiwuUser', root: true},
    http: {verb: 'put', path: '/avatar'},
    isStatic: false
  })

  HiwuUser.prototype.publicView = function (cb) {
    HiwuUser.findById(this.id, {
      include: {
        relation: 'galleries',
        scope: {
          where: { public: true },
          include: {
            relation: 'items',
            scope: {
              where: { public: true },
              include: 'photos'
            }
          }
        }
      }
    }, cb)
  }

  HiwuUser.remoteMethod('publicView', {
    description: 'View a public profile.',
    returns: {arg: 'hiwuUser', type: 'HiwuUser', root: true},
    http: {verb: 'get'},
    isStatic: false
  })
}
