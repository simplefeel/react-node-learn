var path = require('path');
const webpack = require("webpack");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors
        new webpack.BannerPlugin('This file is created by arthur'),
        
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
        })

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
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "app"),
            "node_modules"
        ],
        extensions: [".js", ".css", ".less", ".jsx", ".json"]
    },
    devServer: {
        compress: true,
        port: 9000,
        // contentBase: './public'
    },
    devtool: 'inline',
}
