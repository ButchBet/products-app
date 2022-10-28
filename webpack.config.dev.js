const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/App.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/fonts/[hash][ext][query]',
    clean: true,
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@css": path.resolve(__dirname, "src/css"),
      "@components": path.resolve(__dirname, "src/components")
    }
  },

  mode: 'development',

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

      // {
      //   test: /\.(woff|woff2)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       mimetype: "application/font-woff",
      //       name: "[name].[contenthash].[ext]",
      //       outputPath: "./assets/fonts/",
      //       publicPath: "./assets/fonts/",
      //       esModule: false,
      //     },
      //   }
      // }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: './index.html'
    }),

    new miniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),

    // new copyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src", "assets/images"),
    //       to: "assets/images"
    //     }
    //   ]
    // })
  ],

  watch: true,
}