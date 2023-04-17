
function task (cb) {
  console.log('task')
  cb()
}

const tasks = []
for (let i = 0; i < 100000; i++) {
  tasks.push(task)
}

let completed = 0
tasks.forEach(task => {
  task(() => {
    console.log('task completed')
    if (++completed === tasks.length) {
      finish()
    }
  })
})
function finish () {
  // all the tasks completed
  console.log('all tasks completed')
}

console.log('end')
