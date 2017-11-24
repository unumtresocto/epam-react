const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: false
});

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        app: [
            './index.jsx',
        ]
    },

    output: {
        path: path.join(__dirname, "/build"),
        publicPath: '/',
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        historyApiFallback: true,
        contentBase: false,
        hot: true,
        port: 3000
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'Test',
        //     hash: true,
        //     template: './index.html'
        // }),
        extractSass
    ],
};
