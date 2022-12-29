import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    format: 'es',
    file: './dist/el-table-virtual-scroll.esm.js',
    name: 'el-table-virtual-scroll',
    sourcemap: false
  }
})

export default config
