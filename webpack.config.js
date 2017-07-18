const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'public/javascripts/local/dist',
    filename: 'bundle.js',
  },
  resolve: {
    root: [path.resolve('./src'), path.resolve('./view')],
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
};
