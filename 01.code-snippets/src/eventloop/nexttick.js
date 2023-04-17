let bar

function someAsyncApiCall (callback) {
  console.log('start someAsyncApiCall')
  process.nextTick(callback)
  console.log('end someAsyncApiCall')
}

console.log('before someAsyncApiCall')
someAsyncApiCall(() => {
  console.log('bar', bar)
})
console.log('after someAsyncApiCall')

bar = 1
