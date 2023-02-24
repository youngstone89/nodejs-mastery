const qs = require('qs')
const root = 'https://example.com/engagementAPI/v2/agent'

const loginUrl = root + '/login'
const obj = qs.parse(loginUrl)
console.log(obj)

const logoutUrl = root + '/logout?registeredId=abcdefghijklmnopqrstuvwxyz'
console.log((new URL(logoutUrl)).pathname)

const logoutObj = qs.parse(logoutUrl)
console.log(logoutObj)

const searchParams = new URLSearchParams(logoutUrl)
const registeredId = searchParams.get('registeredId')
console.log(registeredId)

const url = new URL('http://example.com/search?query=%40')
// const searchParams3 = new URLSearchParams(url.search)
console.log(url.searchParams)
console.log(url.search)
console.log(url.host)
console.log(url.hostname)
console.log(url.pathname)
