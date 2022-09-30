const myObject = {
  city: 'Madrid',
  greet () {
    console.log(`Greetings from ${this.city}`)
  }
}
myObject.greet() // Greetings from Madrid

const prototype1 = {}
const prototype2 = {}
const object1 = Object.create(prototype1)

console.log(Object.getPrototypeOf(object1))
console.log(Object.getPrototypeOf(object1) === prototype1)
console.log(Object.getPrototypeOf(object1) === prototype2)
// expected output: true

function genesys (name) {
  this.name = name
}

genesys.prototype.log = function (msg, type, id) {
  console.log(`name: ${this.name}`, `msg:${msg}`, `type:${type}`, `id:${id}`)
}

genesys.prototype.log('hi', 'chat', '1')
