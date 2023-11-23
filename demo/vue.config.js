const path = require('path')
const buildDemoFiles = require('./build/buildDemoFiles.js')

const isProduction = process.env.NODE_ENV === 'production'
const demoFiles = buildDemoFiles()

const useLocalLib = process.argv.at(-1) !== 'test' // 使用本地的库
const alias = useLocalLib ? {
  'el-table-virtual-scroll': path.resolve('../src/index')
} : ''

module.exports = {
  publicPath: isProduction ? '././' : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env']['demoFiles'] = demoFiles
        return args
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        ...alias
      }
    }
  }
}
