const dupe = new Map()
dupe.set('a', 1)
dupe.set('a', 2)
dupe.set('a', 3)

console.log(dupe)

const obj = {
  a: 1
}

obj.a = 2

console.log(obj)
