const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    clientLogLevel: 'silent',
    // enable HMR
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],
}
