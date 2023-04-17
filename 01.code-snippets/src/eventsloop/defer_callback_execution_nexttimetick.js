function doSomething (callback) {
  // do some work synchronously
//   callback()
  process.nextTick(callback)
  console.log('synchronously')
}

doSomething(() => {
  // this will be called asynchronously
  console.log('asynchronously')
})
