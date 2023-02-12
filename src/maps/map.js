const testMap = new Map()
const a = testMap.get('a')
console.log(a)
if (a === undefined) {
  console.log('undefined')
}

testMap.set('x', 'y')
console.log(testMap)
testMap.delete('x')
console.log(testMap)
