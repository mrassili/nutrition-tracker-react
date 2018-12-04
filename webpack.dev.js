const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
});
