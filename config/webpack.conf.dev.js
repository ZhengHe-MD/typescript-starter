const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  resove: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    fallback: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ]
  }
};