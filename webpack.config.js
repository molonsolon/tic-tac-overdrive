const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname,
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, "./src/index.html"),
    }),
  ],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: "file-loader",
      },
    ],
  },
};
