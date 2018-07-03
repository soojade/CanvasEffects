const path = require('path');
// const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bubble: './src/bubble/index.js',
    particle: './src/panel/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: '[name]/[name].buddle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['www']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'bubble/index.html',
      title: '鼠标滑动生成气泡',
      chunks: ['bubble'],
      inlineSource: '.(js|css)$' // 行内模式插入 js css
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'panel/index.html',
      title: '绘制仪表盘',
      chunks: ['panel'],
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
    // new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'www'),
    inline: true
  }
};
