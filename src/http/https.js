const https = require('https')

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write('data')
    process.stdout.write(d)
  })
  res.on('error', (e) => {
    console.log(e)
  })
})

req.on('error', error => {
  console.error('error>', error)
})

req.end()
