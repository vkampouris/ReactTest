/*
    ./webpack.config.js
*/
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    output: {
        filename: 'index_bundle.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig],
    devServer: {
      historyApiFallback: true
    }
};
