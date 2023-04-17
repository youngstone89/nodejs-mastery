
async function asyncOp (x, cb) {
  const output = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(x)
    }, 1000)
  })
  console.log(output)
  cb()
}

function task1 (cb) {
  asyncOp(1, () => {
    task2(cb)
  })
}
function task2 (cb) {
  asyncOp(2, () => {
    task3(cb)
  })
}
function task3 (cb) {
  asyncOp(3, () => {
    cb()
  })
}

task1(() => {
  console.log('completed...')
})
