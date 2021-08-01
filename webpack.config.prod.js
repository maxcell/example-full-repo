const {merge} = require("webpack-merge")
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
})