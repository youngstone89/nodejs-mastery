const log4js = require('log4js')
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
})

const logger = log4js.getLogger('cheese')
logger.trace('Entering cheese testing')
logger.debug('Got cheese.')
logger.info('Cheese is Comté.')
logger.warn('Cheese is quite smelly.')
logger.error('Cheese is too ripe!')
logger.fatal('Cheese was breeding ground for listeria.')

const express = require('express')
const app = express()
app.get('/health', () => {

})

app.listen(8080, () =>
  logger.info('i am healthy.')
)
