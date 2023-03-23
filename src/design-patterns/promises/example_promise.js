function delay (ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(new Date())
    }, ms)
  })
}

console.log(`Delaying...${new Date().getSeconds()}s`)
delay(1000)
  .then(newDate => {
    console.log(`Done ${newDate.getSeconds()}s`)
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(new Date()), 1000)
    })
  }).then(newDate => {
    console.log(`Done ${newDate.getSeconds()}s`)
  })
