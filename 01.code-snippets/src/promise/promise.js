const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(''), 5000)
})

console.log('starting')
// don't wait, non blocking
promise
  .then(() => console.log('promise done'))

console.log('ended')
