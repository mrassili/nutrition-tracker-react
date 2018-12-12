const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //eslint-disable-line
const UglifyJSPlugin = require("uglifyjs-webpack-plugin"); //eslint-disable-line
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
  output: {
    publicPath: "/nutrition-tracker-react/",
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
