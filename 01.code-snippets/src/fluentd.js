const express = require('express')
const FluentClient = require('@fluent-org/logger').FluentClient
const app = express()

// The 2nd argument can be omitted. Here is a default value for options.
const logger = new FluentClient('fluentd.test', {
  socket: {
    host: 'localhost',
    port: 24224,
    timeout: 3000 // 3 seconds
  }
})

app.get('/', function (request, response) {
  logger.emit('follow', { from: 'userA', to: 'userB' })
  response.send('Hello World!')
})
const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Listening on ' + port)
})
