
const https = require('https')

// Sample URL
const url = 'https://jsonplaceholder.typicode.com/todos/1'

function asyncOne () {
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
  request.end()
}

function asyncTwo () {
  setTimeout(() => {
    console.log('do two')
  }, 100)
}

asyncOne()
// process.nextTick(asyncOne)
// asyncTwo()
// process.nextTick(asyncTwo)
setTimeout(() => {
  asyncTwo()
}, 100)
