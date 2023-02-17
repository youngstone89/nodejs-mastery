const fs = require('fs')

function asyncOp (callback) {
  fs.readFile('test.txt', callback)
}

const timeoutScheduled = Date.now()

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled

  console.log(`${delay}ms have passed since I was scheduled`)
}, 100)

asyncOp(() => {
  const startCallback = Date.now()
  while (Date.now() - startCallback < 10) {

  }
})
