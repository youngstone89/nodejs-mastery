const { EventEmitter } = require('events')

function helloEvents () {
  const eventEmitter = new EventEmitter()
  setTimeout(() => eventEmitter.emit('complete', 'hello world'), 100)
  return eventEmitter
}
function helloCallback (cb) {
  setTimeout(() => cb(null, 'hello world'), 100)
}
helloEvents().on('complete', message => console.log(message))
helloCallback((_err, message) => {
  return console.log(message)
})
