const https = require('https')

function cb () {
  console.log('callback done')
}

const options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/',
  method: 'GET'
}

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode)

  res.on('data', (d) => {
  })

  res.on('error', (err) => {
    console.log('error:', err)
  })
  res.on('end', () => {
    console.log('response end')
  })
  res.on('close', () => {
    console.log('response close')
    cb()
  })
})

req.on('error', (e) => {
  console.error(e)
})

req.on('end', () => {
  console.log('request completed')
})

req.end(() => {
  console.log('request ended')
})
