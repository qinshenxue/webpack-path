const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    context: path.resolve(__dirname, './src'),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, `./static/`),
        filename: 'js/[name].js',
        publicPath: '../static'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html"
        })
    ]
}