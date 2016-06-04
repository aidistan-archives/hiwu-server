// var async = require('async')
var assert = require('chai').assert
var request = require('supertest')
var app = require('../../server/server')

describe('HiwuUser', function () {
  var _ = {}

  before(function (done) {
    app.models.HiwuUser.simpleLogin('aidistan', null, function (err, accessToken) {
      assert.ifError(err)

      _.token = accessToken.id
      _.userId = accessToken.userId

      done()
    })
  })

  it('update avatar', function (done) {
    request(app)
      .put('/api/HiwuUsers/' + _.userId + '/avatar')
      .set('Authorization', _.token)
      .attach('data', 'test/fixtures/avatar.jpg')
      .end(function (err, res) {
        assert.ifError(err)
        assert.notEqual(res.body.avatar)

        done()
      })
  })
})
