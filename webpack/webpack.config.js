const webpack = require('webpack');
const path = require('path')

module.exports = {
  /*
   *    The base directory, an absolute path, for resolving entry points and loaders from configuration.
   */
  context: path.resolve(__dirname, ".."),
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: './asset'
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          use: [{
            loader: 'babel-loader',
            options: { presets: ["es2015"] }
          }]
      }
    ]
  }
}
