const ghpages = require('gh-pages')
const fs = require('fs-extra')

function genDest () {
  try {
    fs.removeSync('dist-demo')
    fs.copySync('demo-v2/dist', 'dist-demo')
    fs.copySync('demo-v1/dist', 'dist-demo/v1')
  } catch (err) {
    console.error(err)
  }
}

genDest()
console.log('ghpages.publish...')
ghpages.publish('dist-demo', {
  message: 'auto publish'
}, function (err) {
  console.error(err)
})
