const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const reactConfig = require('./config/react')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const extendConfig = merge.smart(reactConfig);
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
        }]
    }
})

config.plugins.push(

    new MiniCssExtractPlugin({
        filename: "[name].[hash:5].css"
    }),
    new OptimizeCSSAssetsPlugin({})
)

module.exports = config
