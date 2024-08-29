const fs = require('fs')
const path = require('path')

const demoDir = path.resolve(__dirname, '../src/views')

function buildDemoFiles () {
  const files = fs.readdirSync(demoDir)
  const jsonData = {}
  files.forEach(function (fileName) {
    const filePath = path.join(demoDir, fileName)
    const stat = fs.statSync(filePath)
    if (stat.isFile() && fileName.endsWith('.vue')) {
      const name = fileName.replace(/.vue$/, '')
      const data = fs.readFileSync(filePath, 'utf-8')
      jsonData[name] = JSON.stringify(data)
    }
  })
  return jsonData
}


module.exports = buildDemoFiles
