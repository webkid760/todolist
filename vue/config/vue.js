const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    module: {
        rules: [{
            test: /\.vue$/,
            include: [
                path.resolve(__dirname, '../src'),
            ],
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: [MiniCssExtractPlugin.loader, "css-loader"]
                    }
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            // 'vue$': 'vue/dist/vue.common.js' webpack1时使用
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
