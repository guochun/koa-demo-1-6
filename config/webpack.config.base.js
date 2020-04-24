const path = require('path')
const {
  DefinePlugin
} = require('webpack')
const nodeExternals = require('webpack-node-externals')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const {
  APP_PATH,
  DIST_PATH,
  resolve
} = require('./utils')

const env = process.env.NODE_ENV

const webpackConfig = {
  target: 'node',
  entry: {
    server: path.join(APP_PATH, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: [resolve('node_modules')]
    }]
  },

  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: (env === 'prod' || env === 'production') ? "'production'" : "'development'"
      }
    })

  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
}

module.exports = webpackConfig