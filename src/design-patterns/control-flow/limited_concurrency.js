function task (cb) {
  console.log('task')
  cb()
}

const tasks = []
for (let i = 0; i < 10; i++) {
  tasks.push(task)
}

const concurrency = 2
let running = 0
let completed = 0
let index = 0
function next () {
  // (1)
  while (running < concurrency && index < tasks.length) {
    const task = tasks[index++]
    task(() => {
      // (2)
      if (++completed === tasks.length) {
        return finish()
      }
      running--
      next()
    })
    running++
  }
}
next()
function finish () {
  console.log('finish: ', completed)
}
