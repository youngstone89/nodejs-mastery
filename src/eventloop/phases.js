const fs = require('fs')
setTimeout(() => { console.log('timeout') }, 1000)

fs.readFile('a.txt', (err) => {
  console.log(err)
})
