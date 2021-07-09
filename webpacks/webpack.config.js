module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'comp.js',
  },
  mode: 'development',
  devServer: {
    publicPath: '/dist'
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // exclude: /node_modules/
        include: /src/
        // exclude 优先级高于include
      }
    ]
  }
}