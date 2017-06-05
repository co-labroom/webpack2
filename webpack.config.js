/**
 * Created by common on 2017/6/1.
 */
var path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
  return {
    entry: {
      main: './index.js'
    },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [{
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract(
          {
            use: 'css-loader'
          }
        )
      }]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),
      new ExtractTextPlugin('styles.css')
    ]
  }
};