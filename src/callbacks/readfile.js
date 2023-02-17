const { readFile } = require('fs')

function cb (data) {
  console.log('callback completed...', data)
}

function callBackAfterRead (filename, cb) {
  readFile(filename, 'utf-8', (err, data) => {
    console.log(err, data)
    cb(data)
  })
}

callBackAfterRead('data.txt', cb)
console.log('who first')
