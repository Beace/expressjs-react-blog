const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();

const VENDOR = ['react', 'react-dom', 'react-router'];

const plugins = [
  // new DashboardPlugin(dashboard.setData),
  new webpack.optimize.CommonsChunkPlugin({
    names: 'vendor',
    minChunks: Infinity,
  }),
  new CleanWebpackPlugin(['build/*.js'], {
    // 打印 log
    verbose: true,
    // 删除文件
    dry: false,
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
];

module.exports = require('./webpack.base.config')({
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js'),
    ],
    vendor: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      ...VENDOR,
    ],
  },
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    },
  ],
  plugins,
});
