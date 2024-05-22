const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const baseConfig = {
  entry: "/src/index.ts",
  output: {
    filename: "static/js/[name].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "../src"),
      "@store": path.resolve(__dirname, "../src/store"),
      "@utils": path.resolve(__dirname, "../src/utils"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      minify: {
        collapseWhitespace: true, //去空格
        removeComments: true, // 去注释
      },
    }),
  ],
};

module.exports = baseConfig;
