const EventEmitter = require('events')
const door = new EventEmitter()

door.on('open', () => {
  console.log('Door was opened')
})

door.emit('open')

door.once('once', () => {
  console.log('only one')
})
door.emit('once')
door.emit('once')
