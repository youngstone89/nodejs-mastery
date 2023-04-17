function task (cb) {
  setTimeout(cb, 1000)
}

const tasks = []
tasks.push(task)
tasks.push(task)
tasks.push(task)
tasks.push(task)

const concurrency = 2
let running = 0
let completed = 0
let index = 0
function next () { // (1)
  while (running < concurrency && index < tasks.length) {
    console.log('Running index: ', index)
    const task = tasks[index++]
    task(() => { // (2)
      if (++completed === tasks.length) {
        return finish()
      }
      running--
      next()
    })
    running++
    console.log('running count: ', running)
  }
  console.log('Completed count: ', completed)
}
next()
function finish () {
  console.log('Finished')
}
