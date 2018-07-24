const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist/src/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.webpack.js', '.web.js', '.js', '.json', 'css']
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, './public/'),
      to: path.join(__dirname, './dist/')
    }])
  ]
};
