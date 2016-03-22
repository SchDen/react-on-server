var webpack = require('webpack');
var path = require('path');

var DEBUG = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
var CLIENT_PATH = path.join(__dirname, 'app');

var config = {
    context: CLIENT_PATH,
    entry: {
        app: './index.jsx',
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: './js/[name].js',
        library: '[name]',
        libraryTarget: 'this',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: [
                    path.join(CLIENT_PATH),
                ],
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                },
            },
        ],
    },

    watch: DEBUG,

    devtool: DEBUG ? 'source-map' : false,
};

// Минимизация кода, если production режим
if (!DEBUG) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        })
    );
}

module.exports = config;
