function sanitize (message) {
  return message.replace(/[\n\r]/g, '')
}

console.log(sanitize('A\nB\r'))
