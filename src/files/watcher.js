const fs = require('fs')

/** Helper for watchFile, also handling symlinks */
function watchFile (path, callback) {
  // Check if it's a link
  fs.lstat(path, function (err, stats) {
    if (err) {
      // Handle errors
      return callback(err)
    } else if (stats.isSymbolicLink()) {
      // Read symlink
      fs.readlink(path, function (err, realPath) {
        // Handle errors
        if (err) return callback(err)
        // Watch the real file
        
        console.log('real path:', realPath)
        fs.watch(realPath, callback)
      })
    } else {
      // It's not a symlink, just watch it
      fs.watch(path, callback)
    }
  })
}

watchFile('./links/LINK', (data) => {
  console.log(data)
})

// watchFile('LINK', (err, data) => { console.log(err, data) })
// const path = 'LINK'
// fs.lstat(path, (err, stats) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(stats)
//   if (stats.isSymbolicLink) {
//     console.log('symlink')
//     fs.readlink(path, (err, realPath) => {
//       if (err) {
//         console.error(err)
//       }
//       console.log('real path:', realPath)
//       fs.watch(realPath, (eventType, key) => {
//         console.log(eventType, key)
//       })
//     })
//   }
// })

// fs.readdir('./', (err, files) => {
//   if (err) {
//     console.err(err)
//   }
//   files.forEach(d => {
//     console.log(d)
//   })
// })
