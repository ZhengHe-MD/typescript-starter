const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../config/webpack.conf.dev');

const app = express();
const compiler = webpack(config);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined': 'dev'));
app.use(helmet());
// app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening to the http://${host}:${port}`);
})