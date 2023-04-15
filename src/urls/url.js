// Base URLs:
const baseUrl = 'https://developer.mozilla.org'

const A = new URL('/', baseUrl)
// => 'https://developer.mozilla.org/'

console.log(A)
console.log(A.hostname)
console.log(A.pathname)
console.log(A.host)
console.log(A.protocol)
console.log(A.href)
console.log(A.searchParams)
