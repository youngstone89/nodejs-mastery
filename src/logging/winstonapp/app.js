const logger = require('./logger')(__filename)

logger.debug('Got cheese.')
logger.info('Cheese is Comté.')
logger.warn('Cheese is quite smelly.')
logger.error('Cheese is too ripe!')

const express = require('express')
const app = express()
app.get('/health', () => {

})

app.listen(8080, () =>
  logger.info('i am healthy.')
)
