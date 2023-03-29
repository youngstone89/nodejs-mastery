const https = require('https')

function cb () {
  console.log(this.args)
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
})

req.on('error', (e) => {
  console.error(e)
})

req.end(cb)
