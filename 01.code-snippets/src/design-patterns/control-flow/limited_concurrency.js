function task (i, cb) {
  process.nextTick(function () {
    console.log('task', i)
    cb()
  })
}

const tasks = []
for (let i = 0; i < 10; i++) {
  tasks.push(task)
}

const concurrency = 3
let running = 0
let completed = 0
let index = 0
function next () {
  // (1)
  while (running < concurrency && index < tasks.length) {
    console.log(`concurrency limit ${concurrency}, running ${running}`)
    const task = tasks[index++]
    task(index, () => {
      // (2)
      if (++completed === tasks.length) {
        return finish()
      }
      running--
      console.log(`task ${index} completed, running next`)
      next()
    })
    running++
    console.log('currently running:', running)
  }
}

function finish () {
  console.log('finish: ', completed)
}
process.nextTick(next)

setInterval(() => {
  console.log(Date.now())
}, 500)
