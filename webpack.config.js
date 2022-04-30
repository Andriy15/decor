const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { Module } = require('module')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { config } = require('process')
const loader = require('sass-loader')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const cssLoader = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
            'css-loader'
        ]

        if(extra) {
            loaders.push.extra
        }

    return loaders
}


const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to: path.resolve(__dirname, 'dist/images')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
    if(isProd){
        base.push(new BundleAnalyzerPlugin())
    }   

    return base
}


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './app.js',
        photoswipe: './photoswipe.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin()
          ],

    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: plugins(),
    module: {
        rules: [
            // {
            //     test: /\.(html)$/,
            //     use: {
            //         loader: 'html-loader',
            //         options: {
            //             sources: {
            //                 list: [
            //                     {
            //                         tag: "img",
            //                         type: "src",
            //                     },
            //                 ]
            //             }
            //         }
            //     },
            // },
            {
                test: /\.css$/,
                use: cssLoader
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                  }
                }
            }
        ]
    }
}
