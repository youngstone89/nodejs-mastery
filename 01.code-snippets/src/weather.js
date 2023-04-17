const axios  = require('axios')

const getData = async () => {
  const res = await axios.get('https://api.example.com')

  const data = res.data
  return data
}

module.exports = {
  getData
}
