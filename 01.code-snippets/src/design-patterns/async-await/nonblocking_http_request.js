const https = require('https')

async function getHttpsData () {
  const options = {
    hostname: 'www.example.com',
    port: 443,
    path: '/',
    method: 'GET'
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        resolve(data)
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}

async function main () {
  try {
    const data = await getHttpsData()
    console.log(data) // The response body
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  } catch (error) {
    console.error(error)
  }
}

main().then((response) => {
  return response
})
console.log('after main')
