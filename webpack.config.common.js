var webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
      extensions: ['.js', '.ts']
  },
  module: {
      rules: [
          {
              test: /\.html$/,
              use: [{ loader: 'html-loader' }]
          },
          {
              test: /\.css$/,
              use: [{ loader: 'raw-loader' }]
          },
          {
            test: /\.(jpeg|jpg|png|gif|ico)$/i,
            use: [{loader: 'file-loader'}]
          },
          // { test: /\.tsx?$/, loader: "ts-loader"}
      ],
      exprContextCritical: false
  },
  plugins: [    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ]
};
