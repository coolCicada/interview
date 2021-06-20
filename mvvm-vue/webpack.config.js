const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/xuni/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    port: 8080
  }
}
