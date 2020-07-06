const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("custom-env").env(process.env.NODE_ENV);

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx|json)$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["babel-loader"],
      },
      {
        test: /\.s?css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.API": JSON.stringify(process.env.API),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" },
        {
          from: path.resolve(__dirname, "public/_redirects"),
          to: "dist",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
