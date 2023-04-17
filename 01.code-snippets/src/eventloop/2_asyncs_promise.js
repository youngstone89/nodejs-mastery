
const https = require('https')

// Sample URL
const url = 'https://jsonplaceholder.typicode.com/todos/1'

function asyncOne (cb) {
  console.log('async one')
  const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
      data = data + chunk.toString()
      console.log(data)
    })

    response.on('end', () => {
      const body = JSON.parse(data)
      console.log(body.userId)
      console.log(body.id)
      console.log(body.title)
      console.log(body.completed)
    })
    response.on('error', (err) => {
      console.log('An error', err)
    })
  })
  request.end(cb)
}

function asyncTwo (cb) {
  setTimeout(() => {
    cb()
  }, 100)
}

const asyncOnePromise = function promisify () {
  return new Promise((resolve, reject) => {
    asyncOne()
    resolve()
  })
}

const asyncTwoPromise = function promisify () {
  return new Promise((resolve, reject) => {
    asyncTwo(() => {
      console.log('async two resolving...')
      resolve()
    })
  })
}

asyncOnePromise()
  .then(function () {
    return asyncTwoPromise()
  })
  .then(function () {
    console.log('done')
  })
