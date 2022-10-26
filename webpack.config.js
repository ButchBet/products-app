const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: './index.html',
        }),
    ]
}