const fs = require('fs')
const pathLib = require('path')

function StartWatch (path) {
  fs.lstat(path, (err, stats) => {
    if (err) {
      console.error(err)
    }
    if (stats.isDirectory()) {
      fs.readdir(path, (err, files) => {
        if (err) {
          console.error(err)
        }
        files.forEach(f => {
          const newPath = pathLib.join(path, f)
          console.log(`file:${newPath}`)
          fs.lstat(newPath, (err, stats) => {
            if (err) {
              console.error(err)
            }
            if (stats.isSymbolicLink()) {
              fs.readlink(newPath, (err, realPath) => {
                if (err) {
                  console.error(err)
                }
                console.log(`realPath:${realPath}`)
                fs.watch(realPath, (eventType, filename) => {
                  console.log(`eventType[${eventType}]filename[${filename}]`)
                })
              })
            }
          })
        })
      })
    }
    // if (stats.isSymbolicLink()) {
    //   fs.readlink(path, (err, realPath) => {
    //     if (err) {
    //       console.error(err)
    //     }
    //     console.log(`realpath:${realPath}`)
    //   })
    // } else {
    //   console.log('not symbolic link')
    // }
  })
}

// StartWatch('./mnt/secrets-store')

fs.watch('./mnt/secrets-store/..data/', (eventType, filename) => {
  console.log(`eventType[${eventType}]filename[${filename}]`)
})
