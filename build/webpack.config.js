const path = require('path')
const devConfig = require('./webpack.config.dev.js')
const proConfig = require('./webpack.config.pro.js')
const merge = require('webpack-merge')

console.log(process.env.NODE_ENV)

var config = {};
const commonConfig = {
    mode: process.env.NODE_ENV,
    // entry: {
    //     app: path.join(__dirname, '../client/main.js')
    // },
    output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [ path.join(__dirname, '../node_modules')]
            },
            {
                test: /.jsx$/,
                loader: 'babel-loader',
                include: [ path.join(__dirname, '../client')]
            },
            {
                test: /.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}

if(process.env.NODE_ENV === 'development'){
    config = merge(commonConfig, devConfig)
}else if(process.env.NODE_ENV === 'production'){
    config = merge(commonConfig, proConfig)
}

module.exports = config
