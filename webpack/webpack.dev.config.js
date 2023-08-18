const common = require('./webpack.common.config.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset',
          parser: {
              dataUrlCondition: {
                  maxSize: 10 * 1024 // 10 kb
              }
          },
          generator: {
              filename: './images/[name][ext]'
          }
      }
    ]
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      overlay: true,
      logging: 'error'
    },
  }
})