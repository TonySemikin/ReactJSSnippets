const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we are building for node.js
  // rather thatnfor the browser

  target: 'node',

  // Tell webpack the root file of our server app

  entry: './src/index.js',

  // Tell webpack where to put output file

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
