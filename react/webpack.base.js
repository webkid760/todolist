const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:5].js',
    },
    module: {
        rules: [{
                test: /\.(jpg|png|ico|jpeg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        publicPath: "images/",
                        outputPath: "images/"
                    }
                }]
            },
            {
                test: /\.jsx?/, // 支持 js 和 jsx
                include: [
                    path.resolve(__dirname, 'src'), // src 目录下的才需要经过 babel-loader 处理
                ],
                loader: 'babel-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名和路径
            template: './src/index.html', // 配置文件模板
        }),
    ],
}
