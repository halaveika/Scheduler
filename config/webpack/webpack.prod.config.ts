import * as path from "path";
import webpack from "webpack";
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration =  {
  mode: 'production',
  context: path.resolve(__dirname, '../../'),
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, '../../src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../../public/assets/images') , to: path.resolve(__dirname, '../../build/assets/images')},
        { from: path.resolve(__dirname, '../../public/manifest.json') , to: path.resolve(__dirname, '../../build/manifest.json')},
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../../build'),
    clean: true,
   publicPath: '/',
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
};

export default config;