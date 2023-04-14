
const promises = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

Promise.all(promises)
  .then(res => {
    return res.join('')
  }).then(res => {
    console.log(res)
  })
