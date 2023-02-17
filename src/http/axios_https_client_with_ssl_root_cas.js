// index.js
const axios = require('axios')
const path = require('path')
const https = require('https')
const rootCas = require('ssl-root-cas').create()

rootCas.addFile(path.resolve(__dirname, 'intermediate.pem'))
const httpsAgent = new https.Agent({ ca: rootCas })

axios.post('https://fldcf-usw-app001-svc-rtr001.nwncloud.com', { httpsAgent })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
