module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  extends: [
    'standard'
  ],
  env: {
    browser: true,
  }
}