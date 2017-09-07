const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "lodash"
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(ttf|eot|woff2?)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            limit: 16000
          }
        }
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            limit: 16000
          }
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  devServer: {
    contentBase: dist
  }
};
