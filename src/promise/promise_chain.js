function promiseOne (params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve('promiseOne')
      reject(new Error('promiseOne error'))
    }, 1000)
  })
}

function promiseTwo (params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('rejected..at two'))
    }, 1000)
  })
}

promiseOne()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  .then(promiseTwo)
  .catch((err) => {
    console.log(err)
  })
  .finally(() => { console.log('done') })

// promiseOne()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch(
//     (result) => {
//       console.log(result)
//       return promiseTwo()
//     })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log('done')
//   })
