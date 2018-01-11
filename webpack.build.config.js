var path = require('path');
const webpack = require("webpack");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
    entry: {
        build: path.resolve(__dirname, 'app/index.js'),
        vendor: ['react', 'react-dom','react-router']
    },
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        publicPath: 'assets/',
        filename: '[name].[chunkhash:5].js',
    },
    externals: {
        jquery: 'jQuery',
    },
    plugins: [
        new Clean('./public/assets'),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8','>1% in CN']
                        })
                    ]
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            beautify: false,
            minimize: true,
            sourceMap: true,
            exclude: [
                /node_modules/
            ],
            output: {
                comments: false,
                ascii_only: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'],minChunks: Infinity }),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new HtmlWebpackPlugin({
            template: 'public/template.html',
            filename: '../index.html'
        }
        )

    ],


    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            loaders: [
                'react-hot-loader', 'babel-loader'
            ],
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }],

        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader','css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader','css-loader','less-loader',{
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [
                                      precss,autoprefixer
                                    ]
                                }
                            }
                        }
                ]
            },
        ],
        noParse: /node_modules\/(jquey|moment|chart\lodash\.js)/
    },
    resolve: {
        modules: [
            path.join(__dirname, "app"),
            "node_modules"
        ],
        extensions: [".js", ".css", ".less", ".jsx", ".json"]
    },
    devtool: 'eval',
}