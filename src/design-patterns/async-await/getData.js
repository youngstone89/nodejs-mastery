const axios = require('axios')
async function getData () {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

module.exports = getData
