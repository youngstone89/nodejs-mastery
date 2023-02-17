const https = require('https')

const options = {
  hostname: 'global-root-ca.chain-demos.digicert.com',
  port: 443,
  method: 'GET',
  rejectUnauthorized: true
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
