const path = require("path")

module.exports = {  
  mode: process.env.NODE_ENV || "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /(node_modules)/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
      // Are these the same?
      // Do either actually run with the preset?
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules)/,
      //   use: [{
      //       loader: 'babel-loader', 
      //       options: {
      //         presets: ['@babel/preset-env']
      //       }
      //     },
      //   ]
      // }
    ]
  }
}