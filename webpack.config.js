var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist',
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './tmpl.html',
    production: true,
    title: 'Testing'
  })
  ],

  module: {
    preLoaders: [
      { test: /\.js|\.jsx$/,loader: 'babel',exclude: /node_modules/ }
    ]
  }

}
