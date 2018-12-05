const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        app:  path.join(__dirname,'../client/main.js')
        // app: ['react-hot-loader/patch', path.join(__dirname,'../client/main.js')]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../client/index.html'),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, '../build'),
        port: 8888,
        host: '0.0.0.0',
        hot: true
    }
}


