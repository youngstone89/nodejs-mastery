const events = require('events')
const emitter = new events.EventEmitter()

function call (time) {
  console.log(time)
  setTimeout(() => {
    emitter.emit('timeout', Date.now())
  }, 1 * 1000)
}

emitter.on('timeout', call)

console.log('started...')

call(Date.now())
