const queue = []

function Task () {
  return Promise.resolve('content')
    .then((res) => {
      console.log('before return runTask ', res)
      return res
    })
}

function pushTask (task) {
  return new Promise((resolve, reject) => {
    queue.push(() => {
      return task().then(resolve, reject)
    })
  })
}
