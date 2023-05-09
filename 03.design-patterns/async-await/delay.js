async function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(new Date()),ms)
    })
}



async function playingWithDelays() {
  console.log('Delaying...', new Date())
  const dateAfterOneSecond = await delay(1000)
  console.log(`one second after `,dateAfterOneSecond)
  const dateAfterThreeSeconds = await delay(3000)
  console.log(`and 3 seconds after  `,dateAfterThreeSeconds)
  return 'done'
}

playingWithDelays()
    .then(result => {
        console.log(result)
})
