const { readFile } = require('fs')
const cache = new Map()
function consistentReadAsync (filename, callback) {
  if (cache.has(filename)) {
    process.nextTick(() => {
      console.log('read from cache')
      callback(cache.get(filename))
    })
  } else {
    readFile(filename, 'utf-8', (err, data) => {
      console.log('read from file', err)
      cache.set(filename, data)
      callback(data)
    })
  }
}

function createFileReader (filename) {
  const listeners = []
  consistentReadAsync(filename, value => {
    listeners.forEach(listener => listener(value))
  })
  // return the onDataReady when the inconsistenRead function completes
  return {
    onDataReady: listener => listeners.push(listener)
  }
}

const reader1 = createFileReader('data.txt')
reader1.onDataReady(data => {
  console.log(`First call data:${data}`)

  const reader2 = createFileReader('data.txt')
  reader2.onDataReady(data => {
    console.log(`second call data:${data}`)
  })
})
