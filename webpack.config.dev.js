
var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');
var webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
  entry: {
      app: './assets/app/main.ts'
  },
  output: {
      path: path.resolve(__dirname + '/public/js/app'),
      publicPath: "/js/app/",
      filename: 'bundle.js',
      chunkFilename: '[id].chunk.js'
  },
  mode: 'development',
    devtool: 'eval-cheap-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.json"
                    }
                }],
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
  });
