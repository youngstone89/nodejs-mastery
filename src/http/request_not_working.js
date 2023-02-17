const https = require('https')

const options = {
  hostname: 'fldcf-usw-app001-svc-rtr001.nwncloud.com',
  port: 443,
  path: '/um/receive/capi/v2/session/connect',
  method: 'POST',
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
  console.error(error)
})

req.end()
