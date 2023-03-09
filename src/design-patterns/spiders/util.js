const https = require('https')
const cheerio = require('cheerio')

const options = {
  hostname: 'en.wikipedia.org',
  path: '/wiki/Main_Page'
}

https.get(options, (res) => {
  let html = ''
  res.on('data', (chunk) => {
    html += chunk
  })
  res.on('end', () => {
    const $ = cheerio.load(html)
    $('a').each((i, elem) => {
      console.log($(elem).attr('href'))
    })
  })
}).on('error', (error) => {
  console.error(error)
})
