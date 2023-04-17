class TaskQueue {
  constructor () {
    this.queue = []
    this.running = 0
  }

  pushTask (task) {
    for (let i = 0; i < 1000; i++) {
      this.queue.push(task)
    }
    process.nextTick(this.next.bind(this))
    // process.nextTick(this.next)
    return this
  }

  next () {
    while (this.running < 1000 && this.queue.length) {
      console.log(`length: ${this.queue.length}`)
      const task = this.queue.shift()
      task(() => {
        this.running--
        process.nextTick(this.next.bind(this))
      })
      this.running += 1
    }
  }
}
function task () {
  console.log('running task')
}
const taskQueue = new TaskQueue()
taskQueue.pushTask(task)
