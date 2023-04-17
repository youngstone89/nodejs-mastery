
function doSomething () {
  console.log('doSomething')
  setTimeout(() => {
    doSomething()
  }, 1000)
}

doSomething()
