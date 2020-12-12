const path = require('path');
const process = require('process');


const config = {
    entry: {
        na: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'hidden-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // use: 'babel-loader',
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env"]
                    }
                },
                exclude: [
                    '/node_modules/'
                ]
            }
        ],
    },
    plugins: [],
    watch: false
};

module.exports = function (env, argv) {
    // @type argv.mode development | production
    config.devtool = argv.mode === 'production' ? 'hidden-source-map' : 'inline-source-map';
    config.watch = !!argv.watch;
    return config;
};