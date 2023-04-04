const { promises: fsPromises } = require('fs')
// const { promisify } = require('util')
const { mkdirp } = require('mkdirp')
const superagent = require('superagent')

// const mkdirpPromises = promisify(mkdirp)
const { dirname } = require('path')

let content
const filename = 'download/example.com.html'
const url = 'https://example.com'

superagent.get(url)
  .then(res => {
    content = res.text
    return mkdirp(dirname(filename))
  })
  .catch(err => {
    console.error(err)
  })
  .then(() => fsPromises.writeFile(filename, content))
  .then(() => {
    console.log(`Downloaded and saved: ${url}`)
    return content
  })
