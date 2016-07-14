const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  entry: path.resolve(__dirname, '..', 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  resove: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
    }],
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};