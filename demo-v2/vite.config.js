import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

const buildDemoFiles = require('./build/buildDemoFiles.js')
const demoFiles = buildDemoFiles()

// const isProduction = process.env.NODE_ENV === 'production'
// const useLocalLib = !process.env.npm_config_test // 使用本地的库
// const alias = useLocalLib ? {
//   'el-table-virtual-scroll': path.resolve('../src/index.js')
// } : ''

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [createVuePlugin()],
  server: {
    open: true // 自动打开浏览器
    // port: 1567 // 端口号
  },
  resolve: {
    // 别名
    alias: {
      'el-table-virtual-scroll': path.resolve('../src/index.js'),
      '@': path.resolve(__dirname, './src'),
      'element-ui': path.resolve(__dirname, 'node_modules/element-ui')
    },
    extensions: ['.js', '.vue', '.json']
  },
  define: {
    'process.env': {
      demoFiles: demoFiles
    }
  },
  build: {
    sourcemap: true
  }
})
