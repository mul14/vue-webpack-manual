'use strict'

const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',

  entry: [
    './src/main.js'
  ],

  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname + '/..'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('./src/assets/images'),
        to: resolve('dist/images'),
        toType: 'dir'
      },
    ]),
  ]
}
