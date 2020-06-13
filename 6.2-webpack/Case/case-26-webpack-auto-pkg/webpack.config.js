const {CleanWebpackPlugin} = require("clean-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    webpack = require("webpack"),
    path = require("path");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: {
        main: "./src/index.js",
        page1: "./src/assets/js/page1.js",
        page2: "./src/assets/js/page2.js",
    },
    output: {
        filename: "js/[name].[hash:5].js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader?modules"]
            },
            {
                test: /.less$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader?modules", "less-loader"]
            },
            {
                test: /\.(jpe?g)|(png)|(gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                {from: "./public", to: "./"},
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        open: true,
        hot: true,
        index: "index.html",
    },
    stats: {
        colors: true,
        modules: false
    }
};
