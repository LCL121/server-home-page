const path = require('path')

module.exports = {
  assetsDir: 'defaultAssets',
  pages: {
    index: {
      entry: './src/main.ts',
      template: 'public/index.html',
      title: 'LCL首页',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      },
      '/vue_project/': {
        target: 'http://localhost'
      }
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          options.fix = true
          return options
        })
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.join(__dirname, 'src/assets'),
        utils: path.join(__dirname, 'src/utils'),
        components: path.join(__dirname, 'src/components')
      }
    }
  }
}
