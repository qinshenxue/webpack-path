const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, './src/admin'),
    entry: '../web/main.js',
    plugins: [new HtmlWebpackPlugin()]
}