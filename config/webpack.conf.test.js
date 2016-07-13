const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  externals: {
    mocha: 'window',
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}