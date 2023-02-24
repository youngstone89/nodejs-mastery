const obj = {
  name: 'John',
  sayName (id) {
    console.log(`${id}`, this.name)
  }
}

const obj2 = {
  name: 'John2',
  sayName (id) {
    console.log(`${id}`, this.name)
  }
}

// setTimeout(obj.sayName, 1000)

// setTimeout(() => {
//   obj.sayName('from setTimeout')
// }, 1000)

// setTimeout(obj.sayName.bind(obj2), 1000)

// process.nextTick(() => {
//   obj.sayName('from nextTick').bind(obj)
// })
process.nextTick(obj.sayName.bind(obj))
process.nextTick(obj.sayName.bind(obj2))
