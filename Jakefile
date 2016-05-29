require('shelljs/global')
var fs = require('fs')

task('default', ['client:build', 'client:copy', 'client:inject'])

namespace('client', function () {
  desc('Build bundle files')
  task('build', {async: true}, function () {
    var cwd = process.cwd()

    process.chdir('../hiwu-web/')
    jake.exec('npm run build', {printStdout: true}, function () {
      process.chdir(cwd)
      complete()
    })
  })

  desc('Copy static files to /client')
  task('copy', function () {
    rm('-rf', 'client/')
    cp('-R', '../hiwu-web/dist', 'client')
  })

  desc('Inject OneAPM Bi agent')
  task('inject', function () {
    fs.writeFileSync('client/index.ejs',
      fs.readFileSync('client/index.html', { encoding: 'utf-8' })
        .replace(
          '<script src="OneAPM Bi agent placeholder"></script>',
          '<%- oneapm.getBrowserTimingHeader() %>'
        )
    )
    fs.unlink('client/index.html')
  })
})
