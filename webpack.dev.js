const path = require('path');
const webpack = require('webpack');
const mergeConfigs = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = mergeConfigs(
  commonConfig,
  {
    mode: 'development',
    devtool: 'inline-cheap-source-map',

    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'dist'),
      port: 8181,
      inline: true,
      stats: 'minimal',
      watchContentBase: true,
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  }
);
