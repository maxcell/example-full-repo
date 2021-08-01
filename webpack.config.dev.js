const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9002
  },
  devtool: 'source-map'
})