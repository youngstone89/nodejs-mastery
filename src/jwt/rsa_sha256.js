const fs = require('fs')
const jwt = require('jsonwebtoken')

const privateKey = fs.readFileSync('privatekey.pem')
const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' })
console.log(token)

// verify a token asymmetric
const cert = fs.readFileSync('publickey.txt') // get public key
jwt.verify(token, cert, (_err, decoded) => {
  console.log(decoded.foo) // bar
})
