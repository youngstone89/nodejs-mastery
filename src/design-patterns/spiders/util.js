const https = require('https')
const cheerio = require('cheerio')

const options = {
  hostname: 'en.wikipedia.org',
  path: '/wiki/Main_Page'
}
const links = []
const req = https.get(options, (res) => {
  let html = ''
  res.on('data', (chunk) => {
    html += chunk
  })
  res.on('end', () => {
    const $ = cheerio.load(html)
    for (const elem of $('a')) {
      links.push($(elem).attr('href'))
    }
  })
}).on('error', (error) => {
  console.error(error)
})

req.end()

console.log(links)
