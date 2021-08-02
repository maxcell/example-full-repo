const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {  
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: [
              "> 0.25%", 
              "not dead"
            ],
            useBuiltIns: "entry",
            corejs: "3.16.0"
          }], "@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'})
  ]
}