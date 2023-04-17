
function doSomething () {
  console.log('doSomething')
  setInterval(() => {
    doSomething()
  }, 1000)
}

doSomething()
