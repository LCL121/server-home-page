const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: './src/main.ts',
      template: 'public/index.html',
      title: 'LCL首页',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  chainWebpack: process.env.NODE_ENV === 'development'
    ? config => {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          options.fix = true
          return options
        })
    } : config => {},
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.join(__dirname, 'src/assets'),
        utils: path.join(__dirname, 'src/utils')
      }
    }
  }
}
