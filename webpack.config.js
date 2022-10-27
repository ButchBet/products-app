const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/App.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'App.js',
    assetModuleFilename: 'assets/fonts/[name][ext][query]'
  },

  resolve: {
    extensions: ['.js']
  },


  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.css|.styl$/i,
        use: [miniCssExtractPlugin.loader,
          'css-loader',
        ],
      },

      {
        test: /\.png/,
        type: 'asset/resource'
      },

      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: "application/font-woff",
            name: "[name].[ext]",
            outputPath: "./assets/fonts/",
            publicPath: "./assets/fonts/",
            esModule: false,
          },
        }
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: './index.html'
    }),

    new miniCssExtractPlugin(),

    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    })
  ]
}