const https = require('https')
const path = require('path')
const rootCas = require('ssl-root-cas').create()

rootCas.addFile(path.join(__dirname, 'intermediate.pem'))

// will work with all https requests will all libraries (i.e. request.js)
require('https').globalAgent.options.ca = rootCas

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
