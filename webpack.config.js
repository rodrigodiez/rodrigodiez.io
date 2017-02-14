var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                }
            }]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                query: {
                    outputPath: 'fonts/',
                    publicPath: 'fonts/'
                }
            }]
        }, {
            test: /\.(jpg)$/,
            use: [{
                loader: 'file-loader',
                query: {
                    outputPath: 'img/',
                    publicPath: 'img/'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'assets/templates/index.html')
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            Tether: 'tether',
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
