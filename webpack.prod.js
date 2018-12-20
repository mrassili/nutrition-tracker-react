const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
  output: {
    publicPath: "/",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /node_modules/,
        cache: true,
        sourceMap: true,
      }),
    ],
  },
});
