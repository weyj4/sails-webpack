var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/js/index',
  output: {
    path: __dirname + '/.tmp/public/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};