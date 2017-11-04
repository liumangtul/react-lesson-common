const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    entry:{
        index:'./index.js',
        vendor:['react','react-dom']
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                //include: APP_PATH,
                query: {
                    //添加两个presents 使用这两种presets处理js或者jsx文件
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'React',
            filename:'./index.html',
            template:'./index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'[name].[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: './',
        hot:true
    }
};
module.exports=config;