import fetch from 'node-fetch'
const urls = [
  'https://api.chucknorris.io/jokes/random',
  'https://api.chucknorris.io/jokes/random',
  'https://api.chucknorris.io/jokes/random'
]

const requests = urls.map(url => fetch(url))

Promise.all(requests)
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => {
    console.log('Users:', data)
  })
  .catch(error => {
    console.error('Error fetching user data:', error)
  })
