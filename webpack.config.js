const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true, // navigation
    proxy: [
      {
        context: () => true,
        target: 'http://localhost:3002',
        secure: false
      }
    ]
  },

  devtool: 'cheap-eval-source-map', // fast build, super fast rebuilds
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
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
      template: __dirname + '/client/index.html', // create index.html with js script
      inject: 'body',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id][hash].css'
    })
    // new UglifyJsPlugin({ sourceMap: true })
    // new BundleAnalyzerPlugin()
  ],
  mode: 'production'
};
