const url = new URL('https://example.com/?a=hello&b=world')
url.searchParams.set('a', 'world')
url.searchParams.set('b', 'hello')

const body = {
  grant_type: 'password',
  username: 'username',
  password: 'password'
}

const newUrlSearchParams = new URLSearchParams([
  ...Object.entries(body)
]).toString()

console.log(newUrlSearchParams.toString())

// console.log(url.href)
// https://example.com/?a=hello&b=world

// console.log(url.origin)
// https://example.com

// const add_params = {
//   c: 'a',
//   d: new String(2),
//   e: false.toString()
// }

// const new_params = new URLSearchParams([
//   ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
//   ...Object.entries(add_params) // [["c","a"],["d","2"],["e","false"]]
// ]).toString()
// console.log(new_params)
// // a=hello&b=world&c=a&d=2&e=false

// const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`)

// console.log(new_url.href)
// // https://example.com/?a=hello&b=world&c=a&d=2&e=false

// // Here it is as a function that accepts (URL, Record<string, string>)
// const addSearchParams = (url, params = {}) =>
//   new URL(
//     `${url.origin}${url.pathname}?${new URLSearchParams([
//       ...Array.from(url.searchParams.entries()),
//       ...Object.entries(params)
//     ])}`
//   )
