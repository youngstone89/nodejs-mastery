const cron = require('node-cron')
const fs = require('fs')

function readFile () {
  console.log('read file')
  fs.readdir('./', (err, dirs) => {
    console.log(err, dirs)
  })
}

const task = cron.schedule('* * * * * *', readFile)

task.start()
