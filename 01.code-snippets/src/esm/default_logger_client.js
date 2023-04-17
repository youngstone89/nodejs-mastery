// import MyLogger from './default_logger.js'
import * as defaultLogger from './default_logger.js'
// const logger = new MyLogger('info')
// logger.log('Hello World')
// eslint-disable-next-line new-cap
const logger = new defaultLogger.default('info')
logger.log('hello world')
