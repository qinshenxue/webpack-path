const path = require('path')
module.exports = {

    context: path.resolve(__dirname, './src'),
    entry: './main.js',
    output: {
        //path: path.resolve(__dirname, './dist/[hash:8]/'),
        path: path.resolve(__dirname, `./dist/${Date.now()}`),
        filename: '[name].js'
    }
}