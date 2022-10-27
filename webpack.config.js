const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssEstractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/App.js',
   
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js'],
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.css|\.styl$/,
                use: [
                    miniCssEstractPlugin.loader,
                    'css-loader',
                ]
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'static/images/[hash][ext][query]',
                },
              },
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: './index.html',
        }),

        new miniCssEstractPlugin(),

        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        }),
    ]
}