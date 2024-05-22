const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const path = require("path");

const host = "127.0.0.1";
const port = "8080";

const devConfig = merge(baseConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    host,
    port,
    open: true, // 是否自动打开
    compress: false, // gzip压缩,开发环境不开启，提升热更新速度
    hot: true, // 开启热更新
    historyApiFallback: true, // 解决history路由404问题
    setupExitSignals: true, // 允许在 SIGINT 和 SIGTERM 信号时关闭开发服务器和退出进程。
    static: {
      directory: path.join(__dirname, "../public"), // 托管静态资源public文件夹
    },
    headers: { "Access-Control-Allow-Origin": "*" }, // HTTP响应头设置，允许任何来源进行跨域请求
    proxy: [
      {
        context: ["/dav"],
        target: "https://dav.jianguoyun.com",
        changeOrigin: true,
      },
    ],
  },
});

module.exports = devConfig;
