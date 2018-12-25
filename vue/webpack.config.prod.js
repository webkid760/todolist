const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const vueConfig = require('./config/vue')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const extendConfig = merge.smart(vueConfig);
const config = merge.smart(baseConfig, extendConfig, {
    module: {
        rules: [{
                test: /\.css/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader?modules=false',
                        options: {
                            importLoaders: 1,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|ico|jpeg|gif)$/,
                use: [{
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { // 压缩 jpeg 的配置
                                progressive: true,
                                quality: 65
                            },
                            optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                                enabled: false,
                            },
                            pngquant: { // 使用 imagemin-pngquant 压缩 png
                                quality: '50',
                                speed: 4
                            },
                            gifsicle: { // 压缩 gif 的配置
                                interlaced: false,
                            },
                            webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
                                quality: 75
                            },
                        }
                    }

                ]
            },
            {
                test: /\.jsx?/, // 支持 js 和 jsx
                include: [
                    path.resolve(__dirname, 'src'), // src 目录下的才需要经过 babel-loader 处理
                ],
                loader: 'babel-loader',
            }
        ]
    }
})

config.plugins.push(

    //每次清除dist，避免多个生成的文件
    new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname)
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[hash:5].css"
    }),
    //使用CSS压缩
    new OptimizeCSSAssetsPlugin({})
)


module.exports = config
