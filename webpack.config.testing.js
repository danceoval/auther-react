
'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './tests/runTests.js',
  output: {
    path: __dirname,
    filename: './tests/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',  
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
