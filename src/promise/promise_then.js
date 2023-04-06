const p1 = new Promise((resolve, reject) => {
//   resolve('success')
  reject(new Error('error'))
})

// p1.then((res) => {
//   console.log(res)
// }, (error) => {
//   console.error(error)
// }).catch((err) => {
//   console.log('catched' + err)
// })

p1.catch((err) => {
  console.log('catched' + err)
  return err
}).then((res) => {
  console.log('res' + res)
})
