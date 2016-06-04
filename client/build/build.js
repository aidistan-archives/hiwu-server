// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var fs = require('fs')
var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  // Inject OneAPM Bi Agent
  fs.writeFileSync('dist/index.ejs',
    fs.readFileSync('dist/index.html', { encoding: 'utf-8' })
      .replace(
        '<script src="OneAPM Bi agent placeholder"></script>',
        '<%- oneapm.getBrowserTimingHeader() %>'
      )
  )
  fs.unlink('dist/index.html')
})
