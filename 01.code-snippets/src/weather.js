const axios = require('axios').default

// const scope = nock('https://api.weatherapi.com/v1')
//   .get('')
//   .reply(200, {
//     data: {
//       id: 1,
//       title: 'The weather is nice',
//       completed: true
//     }
//   })

const getData = async () => {
  const res = await axios.get('https://api.example.com')

  const data = res.data
  return data
}

module.exports = getData
// module.exports = getData
