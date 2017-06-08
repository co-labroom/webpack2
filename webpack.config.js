/**
 * Created by common on 2017/6/1.
 */
var path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
  ManifestPlugin = require('webpack-manifest-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  WebpackChunkHash = require('webpack-chunk-hash');
devtool = 'inline-source-map';
module.exports = function (env) {
  return {
    entry: {
      main: './index.js',
      vendor: 'moment'
    },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: "[name].[chunkhash].js"
    },
    devtool,
    // module: {
    //   rules: [{
    //     test: /\.css$/,
    //     // use: ['style-loader', 'css-loader']
    //     use: ExtractTextPlugin.extract(
    //       {
    //         use: 'css-loader'
    //       }
    //     )
    //   }]
    // },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   minChunks: function (module) {
      //     return module.context && module.context.indexOf('node_modules') !== -1;
      //   }
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'manifest'
      // }),
      // new ExtractTextPlugin('styles.css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: ["vendor", "manifest"], // vendor libs + extracted manifest
        minChunks: Infinity,
      }),
      new webpack.NamedModulesPlugin(),
      new WebpackChunkHash(),
      new ChunkManifestPlugin({
        filename: "chunk-manifest.json",
        manifestVariable: "webpackManifest",
        inlineManifest: true
      }),
      // new webpack.optimize.UglifyJsPlugin({
      //   sourceMap: devtool && (devtool.indexOf("sourcemap") >= 0 || devtool.indexOf("source-map") >= 0)
      // }),
      new ManifestPlugin(),
      new HtmlWebpackPlugin(),
    ]
  }
};