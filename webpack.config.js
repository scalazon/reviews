const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true, //navigation
    proxy: [
      {
        context: () => true,
        target: 'http://localhost:3002',
        secure: false
      }
    ]
  },

  devtool: 'cheap-eval-source-map', //fast build, super fast rebuilds
  performance: {
    maxEntrypointSize: 10000,
    maxAssetSize: 10000,
    hints: false
  },

  entry: {
    index: './client/index.jsx' //entry point
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'reviews_bundle.js',
    chunkFilename: '[id][hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
            minimize: true
          }
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Brandon's React Starter",
      template: __dirname + '/client/index.html', //create index.html with js script
      inject: 'body',
      filename: 'index.html'
    })
  ],
  mode: 'production'
};
