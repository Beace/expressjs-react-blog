const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OfflinePlugin = require('offline-plugin');

const VENOR = [
  'lodash',
  'react',
  'react-dom',
  'react-router',
];

module.exports = {
  entry: {
    bundle: [
      './src/index.js',
    ],
    vendor: [
      ...VENOR,
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
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
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
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
    new webpack.NamedModulesPlugin(),
    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    // new OfflinePlugin({
    //   relativePaths: false,
    //   publicPath: '/',
    //
    //   // No need to cache .htaccess. See http://mxs.is/googmp,
    //   // this is applied before any match in `caches` section
    //   excludes: ['.htaccess'],
    //
    //   caches: {
    //     main: [':rest:'],
    //
    //     // All chunks marked as `additional`, loaded after main section
    //     // and do not prevent SW to install. Change to `optional` if
    //     // do not want them to be preloaded at all (cached only when first loaded)
    //     additional: ['*.chunk.js'],
    //   },
    //
    //   // Removes warning for about `additional` section usage
    //   safeToUseOptionalCaches: true,
    //
    //   AppCache: false,
    // }),
  ],
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: {
    assetFilter: assetFilename => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
};
