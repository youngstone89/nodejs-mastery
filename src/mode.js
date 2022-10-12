const DEVMODE = (process.env.NODE_ENV !== 'production')

if (DEVMODE) {
  console.log('application started in development mode')
}

const obj = {
  hi: {
    there: 'here'
  }
}
console.log(obj)
console.log('%j', obj)
console.dir(obj)
console.table(obj)
console.count(obj)
console.time(obj)
console.timeLog(obj)
console.timeEnd(obj)

const x = 123
console.log({ x })

const util = require('util')
const debuglog = util.debuglog('myapp')

debuglog('myapp debug message [%d]', 123)
