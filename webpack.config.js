const path = require('path');
const webpack = require('webpack');
// const express = require('express');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

const VENOR = ['react', 'react-dom', 'react-router'];

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:3000',
      'react-hot-loader/patch',
      './src/index.js',
    ],
    vendor: [
      'webpack-dev-server/client?http://localhost:3000',
      'react-hot-loader/patch',
      ...VENOR,
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      beComponents: path.resolve(__dirname, 'src/beComponents/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      fetch: path.resolve(__dirname, 'src/fetch/'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
        query: {
          name: 'static/images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor',
      minChunks: Infinity,
    }),
    new CleanWebpackPlugin(['build/bundle.*.js'], {
      // 打印 log
      verbose: true,
      // 删除文件
      dry: false,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    stats: { chunks: false },
    historyApiFallback: true,
    publicPath: '/',
    hotOnly: true,
    // quiet: true, // 处于静默模式，webpack-dashboard生效
    // before(app) {
    //   app.use('/', express.static(path.join(__dirname, 'public')));
    // },
  },
};
