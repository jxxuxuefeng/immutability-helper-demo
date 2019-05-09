const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        host: '169.254.62.67',
        port: '8888',
        open: true
    }
}