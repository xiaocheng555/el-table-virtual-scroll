import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    format: 'umd',
    file: './dist/el-table-virtual-scroll.umd.js',
    name: 'el-table-virtual-scroll',
    sourcemap: false
  }
})

export default config
