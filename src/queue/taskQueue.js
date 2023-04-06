class TaskQueue {
  constructor (concurrency) {
    this.concurrency = concurrency
    this.running = 0
    this.queue = []
  }

  runTask (task) {
    return new Promise((resolve, reject) => {
      this.queue.push(() => {
        return task().then(resolve, reject)
      })
      process.nextTick(this.next.bind(this))
    })
  }

  next () {
    while (this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift()
      task().finally(() => {
        this.running--
        this.next()
      })
      this.running++
    }
  }
}

const taskQueue = new TaskQueue(1)
const task = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, 1000)
  })
}

taskQueue
  .runTask(task)
  .then(res => console.log(res))
