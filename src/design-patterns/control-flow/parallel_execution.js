const start = Date.now()
let completed = 0
let finished = false
const links = []

for (let i = 0; i < 1000000; i++) {
  links.push('https://google.com')
}

function doSomething (link) {
  completed++
  console.log(`${link} has been completed: count is now ${completed}`)
  check()
}
function check () {
  if (completed === links.length) {
    finished = true
  }
}
console.log('starting tasks')

// for (const link of links) {
//   doSomething(link)
// }
links.forEach(
  link => {
    doSomething(link)
  }
)

console.log('started tasks')

setInterval(() => {
  if (finished === true) {
    console.log(`all links have been completed, took ${Date.now() - start}ms`)
    process.exit(0)
  }
}, 1000)
