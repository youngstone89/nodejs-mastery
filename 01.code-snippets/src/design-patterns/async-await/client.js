const getData = require('./getData')

async function main () {
  const data = await getData()
  return data
}

async function run () {
  try {
    const result = await main()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

async function start () {
  await run()
  console.log('Done')
}

start()
