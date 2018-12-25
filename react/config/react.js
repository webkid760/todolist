const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    module: {
        rules: [{
            test: /\.jsx?/,//\.jsx?或者\.js|jsx$  支持js和jsx
            include: [
                path.resolve(__dirname, '../src'),
            ],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }]
        }]
    }
}
