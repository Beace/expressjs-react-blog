var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "public/javascripts/local/dist",
    filename: "bundle.js"
  },
  resolve: {
    root: [
      path.resolve("./src"),
      path.resolve("./view")
    ]
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
