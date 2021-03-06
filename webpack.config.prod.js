const {merge} = require("webpack-merge")
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new MiniCssExtractPlugin()
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
})