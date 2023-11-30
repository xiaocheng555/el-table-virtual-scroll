module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
        targets: 'ie 11'
      }
    ]
  ],
  plugins: [
    /* 按需引入vant-ui：https://youzan.github.io/vant/#/zh-CN/quickstart#yin-ru-zu-jian */
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
