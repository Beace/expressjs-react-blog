const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VENDOR = ['react', 'react-dom', 'react-router'];

const plugins = [
  new CleanWebpackPlugin(['build/*'], {
    // 打印 log
    verbose: true,
    // 删除文件
    dry: false,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    children: true,
    minChunks: 2,
    async: true,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      screw_ie8: true,
    },
  }),

  // Minify and optimize the index.html
  new HtmlWebpackPlugin({
    template: 'index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
    inject: true,
  }),
];

module.exports = require('./webpack.base.config')({
  entry: {
    main: ['./src/index.js'],
    vendor: VENDOR,
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  rules: [],
  plugins,
  devtool: 'source-map',
  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});
