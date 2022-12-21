const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const json5 = require('json5')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    home: './src/pages/home.js',
    menu: './src/pages/menu.js',
    'contact-info': './src/pages/contact-info.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|svg|gif|png)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      }
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  }
}
