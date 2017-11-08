const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const app = express();

// ************************************
// This is the real meat of the example
// ************************************
// Step 1: Create & configure a webpack compiler
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// Step 2: Attach the dev middleware to the compiler & the server
if (process.env.NODE_ENV === 'development') {
  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  }));

  app.use(webpackHotMiddleware(compiler));
}

// Do anything you like with the rest of your express application.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on %j", 3000);
});

