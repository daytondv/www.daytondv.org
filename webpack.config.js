'use strict';

var webpack = require('webpack');
var NODE_MODULES = __dirname + '/node_modules';

module.exports = {
    context: __dirname + '/src/javascript',
    entry: './application.js',
    output: {
        path: __dirname + '/src/scripts',
        filename: 'application.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        alias: {
            pushMenu: NODE_MODULES + '/push-menu/dist/js/jquery.pushMenu.min.js'
        }
    },
    externals: {
        jquery: 'jQuery'
    }
};
