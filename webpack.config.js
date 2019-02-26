const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    //由于webpack幕后实现"import"、”export“,所以不需要babel转译器
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]},
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'StudyBox',
            template: 'studyOpen.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}