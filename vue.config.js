module.exports = {
  devServer: {
    port: 8000, // 端口视容器运行绑定端口而定
    disableHostCheck: true,
    host: '0.0.0.0',
    watchOptions: {
      poll: true //开启watch主动轮询模式
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue_app/' : '/',
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map'
  }
}
