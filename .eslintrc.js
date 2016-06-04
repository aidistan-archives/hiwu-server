module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  env: {
    mocha: true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
