const path = require("path");
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.tsx",
  devtool: "nosources-source-map",
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.json?$/,
        use: "json-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|eot|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {}
          },
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".svg"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devtool: 'eval-source-map',
    devServer: {
      
        port:3000,
        static:{
          directory: './public'
        },
        historyApiFallback: true,
        hot: true
      },
  mode: 'development'
};