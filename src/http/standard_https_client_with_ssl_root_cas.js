const https = require('https')
const path = require('path')
const rootCas = require('ssl-root-cas').create()

rootCas.addFile(path.join(__dirname, 'intermediate.pem'))

// will work with all https requests will all libraries (i.e. request.js)
require('https').globalAgent.options.ca = rootCas
const payload = {
  channel: 'Nuance ChatBot',
  language: 'en',
  sender: {
    id: 'test',
    name: 'testuser'
  },
  destination: 'CCC_Chat_EN',
  endpoint: '10.77.72.74:8001'
}
const auth = 'Basic ' + Buffer.from('AAAAAA' + ':' + 'ASDFASDFASD').toString('base64')
const options = {
  hostname: 'fldcf-usw-app001-svc-rtr001.nwncloud.com',
  port: 443,
  path: '/um/receive/capi/v2/session/connect',
  method: 'POST',
  rejectUnauthorized: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: auth,
    'X-App-Id': 'NuanceApp'
  }
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

req.write(JSON.stringify(payload))

req.on('error', error => {
  console.error(error)
})

req.end()
