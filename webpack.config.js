'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './public/scripts/application.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'application.bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

//   loaders: [
//     {
//       test: /\.js$/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['es2015']
//       }
//     }
//   ]
// },
//   stats: {
//     colors: true
//   },
//   devtool: 'source-map'
// };
