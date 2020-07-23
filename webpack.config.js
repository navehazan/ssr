const path = require("path");
const config = {
  mode: "development",
  entry: {
    client: ["babel-polyfill", "./src/index-client.js"],
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
};
module.exports = config;
