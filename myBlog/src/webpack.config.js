const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname,`./js/app/index.js`),
    output: {
        path: path.join(__dirname,`../public/javascripts`),
        filename: `index.js`
    },
    module: {
        rules:[{
            test: /\.sass$/,
            use:[`style-loader`, `css-loader`, `less-loader`]
        }]
    }
}