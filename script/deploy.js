const ghpages = require('gh-pages')

console.log('ghpages.publish...')
ghpages.publish('dist', {
  message: 'auto publish'
}, function (err) { 
  console.error(err)
})