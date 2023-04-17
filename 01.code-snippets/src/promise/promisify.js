const { randomBytes } = require('crypto')

randomBytes(1, (err, buf) => {
  if (err) {
    console.error(err)
  }
  console.log(buf.toString())
})

function promisify (callbackBasedApi) {
  return (...args) => {
    return new Promise((resolve, reject) => { // (1)
      const newArgs = [
        ...args,
        function (err, result) { // (2)
          if (err) {
            return reject(err)
          }
          resolve(result)
        }
      ]
      callbackBasedApi(...newArgs) // (3)
    })
  }
}
const randomBytesP = promisify(randomBytes)
randomBytesP(1)
  .then(buffer => {
    console.log(`Random bytes: ${buffer.toString()}`)
  })
