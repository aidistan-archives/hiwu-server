var email = require('emailjs/email')

module.exports = function (app) {
  app.email = email.server.connect({
    user: 'no-reply@hiwu.ren',
    password: 'yrbbi7KmeLknku0s',
    host: 'smtp.hiwu.ren',
    ssl: false
  })
}
