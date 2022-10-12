const https = require('https')

// Sample URL
const url = 'https://jsonplaceholder.typicode.com/todos/1'

const request = https.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data = data + chunk.toString()
    console.log(data)
  })

  response.on('end', () => {
    console.log(response)
    const body = JSON.parse(data)
    console.log(body.userId)
    console.log(body.id)
    console.log(body.title)
    console.log(body.completed)
  })
})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()
