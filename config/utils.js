const path = require('path')

const resolve = function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const APP_PATH = resolve('src')
const DIST_PATH = resolve('dist')

module.exports = {
  resolve,
  APP_PATH,
  DIST_PATH
}