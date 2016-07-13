const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.ts'),
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, '..', 'dist'),
    library: 'typescript-starter',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ]
  },
};