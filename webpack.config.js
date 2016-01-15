'use strict';

var webpack = require('webpack');
var NODE_MODULES = __dirname + '/node_modules';

module.exports = {
    context: __dirname + '/src/javascript',
    entry: './app.js',
    output: {
        path: __dirname + '/src/scripts',
        filename: 'site.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    resolve: {
        alias: {
            jquery: NODE_MODULES + '/jquery/dist/jquery.js'
        }
    }
};
