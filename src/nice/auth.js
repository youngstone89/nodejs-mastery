const https = require('https')

const opts = {
  hostname: 'api.incontact.com',
  path: '/InContactAuthorizationServer/Token',
  port: 443,
  method: 'POST',
  headers: {
    Authorization:
      'Basic ' +
      Buffer.from('' + ':' + '').toString(
        'base64'
      ),
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}
const body = {
  grant_type: 'password',
  username: '',
  password: '',
  scope: ''
}

const req = https.request(opts, (res) => {
  let data = ''
  console.log('Status Code:', res.statusCode)

  res.on('data', function (chunk) {
    data = data + chunk.toString()
  })

  res.on('end', () => {
    console.log('Body: ', JSON.parse(data))
  })
}).on('error', (err) => {
  console.log('Error: ', err.message)
})

req.write(JSON.stringify(body))
req.end()
