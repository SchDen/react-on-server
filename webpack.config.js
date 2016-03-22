var path = require('path');

var CLIENT_PATH = path.join(__dirname, 'app');

var config = {
    context: CLIENT_PATH,
    entry: {
        app: './index.jsx',
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: './js/[name].js',
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

    devtool: 'source-map',
};

module.exports = config;
