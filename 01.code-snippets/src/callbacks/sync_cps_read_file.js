const { readFileSync } = require('fs')
const cache = new Map()

function consistentReadSync (filename) {
  if (cache.has(filename)) {
    return cache.get(filename)
  } else {
    const data = readFileSync(filename, 'utf-8')
    cache.set(filename, data)
    return data
  }
}

console.log(consistentReadSync('data.txt'))
console.log('done...')
