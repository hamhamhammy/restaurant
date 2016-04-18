'use strict';

require('colors');
var webpack = require('webpack');
var path = require('path');
var git = require('git-rev-sync');

// Because they removed the polyfill
require('es6-promise').polyfill();

// Plugins for webpack
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var proxyInfo = function(req, res, options) {
    console.log('Proxied: %s', options.target.replace(/\/$/, '').gray + req.url.green);
    return false;
};


var config = {
    devServer: {
        https: true, // because of CSRF tokens we have to work on secure servers now
        historyApiFallback: {
            index: './spa_config/default.html',
            rewrites: [
                { from: /\/account/, to: './restaurant/spa_account/app/index.html' }
            ]
        },
        publicPath: '/media/webpack/'
        // proxy: [{
        //     path: '/api/*',
        //     target: 'https://perf.redbeacon-inc.com/',
        //     changeOrigin: true,
        //     secure: false,
        //     bypass: proxyInfo
        // }, {
        //     path: '/ps/api/*',
        //     target: 'https://perf.redbeacon-inc.com/',
        //     changeOrigin: true,
        //     secure: false,
        //     bypass: proxyInfo
        // }, {
        //     path: /\/media\/(?!.*(webpack)).*/,
        //     target: 'https://perf.redbeacon-inc.com/',
        //     changeOrigin: true,
        //     secure: false,
        //     bypass: proxyInfo
        // }]
    },

    resolve: {
        alias: {},
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.jsx', '.scss', '.html']
    },

    watch: true,
    cache: true,

    stats: {
        colors: true,
        reasons: true,
        cached: true
    },

    entry: {
        spa_account: './restaurant/spa_account/app/index.js',
        vendors: ['angular', 'angular-animate', 'angular-resource', 'angular-ui-router', 'angular-ui-bootstrap', 'babel-polyfill']
    },

    output: {
        path: path.resolve('./restaurant/media/webpack/'),
        filename: '[name].bundle.js',
        publicPath: '/media/webpack/',
        pathinfo: true
    },

    module: {
        noParse: [],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['ng-annotate?add=true', 'babel?presets[]=es2015']
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', '!css?sourceMap!sass?sourceMap')
        }, {
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!sass?indentedSyntax&sourceMap')
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.woff.?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader?digest=base64'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(git.short()),
            __BRANCH__: JSON.stringify(git.branch()),
            __TAG__: JSON.stringify(git.tag()),
            __HOST__: JSON.stringify(require('os').hostname()),
            __BUILDDATE__: +new Date(),
            __PURPOSE__: JSON.stringify(process.env.PURPOSE || 'local')
        }),
        // Put CSS into it's own file
        new ExtractTextPlugin('[name].bundle.css', {
            allChunks: true
        }),
        // Live reload configuration comes from uwsgi
        new LiveReloadPlugin({
            port: process.env.LIVE_RELOAD_PORT || 35279
        }),
        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.bundle.js'
        }),
        // To prevent moment.js to load all locales
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-ca|es/),
        function() {
            this.plugin("done", function(stats) {
              require("fs").writeFileSync(
                path.join(__dirname, ".", "stats.json"),
                JSON.stringify(stats.toJson()));
            });
          }
    ]
};

module.exports = config;
