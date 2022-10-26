const path = require('path');

module.export({
    entry: './src/App.js',
   
    output: {
        path: path.resolve(__dirname, '/dist');
        filename: '[name].js',
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
    }
})