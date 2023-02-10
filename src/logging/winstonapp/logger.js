const { createLogger, format, transports } = require('winston')
const path = require('path')

function cwe117CRLFFilter (msg) {
  return msg.replace(/[\n\r]/g, '')
}

const sanitizeLogMessage = format(info => {
  try {
    info.message = cwe117CRLFFilter(info.message)
  } catch (error) {

  }
  return info
})

const logger = createLogger({
  level: 'info',
  defaultMeta: { service: 'live-agent-adapter' },
  transports: [
    new transports.File({ level: 'debug', filename: 'logs/debug.log' }),
    new transports.File({ level: 'error', filename: 'logs/error.log' }),
    new transports.File({ level: 'silly', filename: 'logs/combined.log' })
  ],
  format: format.combine(
    sanitizeLogMessage(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    format.json()
  )
})

const getLogger = (caller) =>
  logger.child({
    label: path.basename(caller)
  })

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      level: 'debug',
      colorize: true,
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        format.printf(
          (info) =>
            `${info.timestamp} ` +
            (`${info.level.toUpperCase()}` + '       ').substr(0, 7) +
            ` ${info.label} ${info.message}`
        )
      )
    })
  )
}

module.exports = getLogger
