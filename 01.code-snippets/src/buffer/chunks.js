// Importing https module
const http = require('http')

// Setting the configuration for
// the request
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'GET'
}

// Sending the request
const req = http.request(options, (res) => {
  const chunks = []

  res.on('data', (chunk) => {
    // chunks.push(chunk)
  })

  // Ending the response
  res.on('end', () => {
    console.log(chunks.length)
    if (chunks.length > 0) {
      console.log('length is greater than 0')
    } else {
      return
    }
    const body = JSON.parse(Buffer.concat(chunks).toString())
    console.log(body)
  })
}).on('error', (err) => {
  console.log('Error: ', err)
}).end()
