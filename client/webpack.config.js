const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node-modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Pablo",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
  },
};
