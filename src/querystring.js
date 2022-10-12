const qs = require('qs')
const assert = require('assert')

const obj = qs.parse('a=c')
console.log(obj)
assert.deepEqual(obj, { a: 'c' })

const str = qs.stringify(obj)
console.log(str)
assert.equal(str, 'a=c')
