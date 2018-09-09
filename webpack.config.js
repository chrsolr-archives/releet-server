'use strict';

const path = require('path');

module.exports = {
  entry: './public/scripts/core/app.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'application.bundle.js'
  },
  mode: 'production',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['angularjs-annotate']
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
