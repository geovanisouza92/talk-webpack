const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: dist,
    filename: "bundle.js"
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
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  devServer: {
    contentBase: dist
  }
};
