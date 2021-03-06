/**Указывает правильные пути */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    /**Точка входа(основной файл) */
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    module: {
        rules:[
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCss.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },

    /**Куда будет помещен исходный файл */
    output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GeekBrains Shop JS2',
            template: path.resolve(__dirname, './src/public/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new MiniCss({
            filename: "style.css",
        })
    ],
}