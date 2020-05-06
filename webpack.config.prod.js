var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig,{
  entry: {
      app: './assets/app/main.aot.ts'
  },
  output: {
      path: path.resolve(__dirname + '/public/js/app'),
      publicPath: "/js/app/",
      filename: 'bundle.js',
      chunkFilename: '[id].[hash].chunk.js'
  },
  mode: 'production',
  resolve: {
      extensions: ['.js', '.ts']
  },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.aot.json"
                    }
                }],
                exclude: /node_modules/,
            }
        ]
    }
  });
