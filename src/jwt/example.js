const jwt = require('jsonwebtoken')
const token = jwt.sign({ food: 'bar' }, 'shhhhh')
console.log(token)

const result = jwt.verify(token, 'shhhhh')
console.log(result)

console.log(Math.floor(Date.now() / 1000))
const tokenWithExp = jwt.sign({
  exp: Math.floor(Date.now() / 1000) + (60 * 60),
  data: 'foobar'

}, 'secret')

console.log(tokenWithExp)

jwt.sign({
  data: 'foobar'
}, 'secret', {
  expiresIn: '1h'
})
