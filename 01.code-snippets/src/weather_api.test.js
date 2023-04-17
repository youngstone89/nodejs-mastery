const nock = require('nock') 
jest.unmock('nock')

const { getData } = require('./weather.js')

describe('expectedData', () => {
  it('checks if API returns expected data', async () => {
    nock('https://api.example.com')
      .get('/')
      .reply(200, {
        data: {
          id: 1,
          title: 'The weather is nice',
          completed: true
        }
      })
    const results = await getData()
    expect(results.data.title).toEqual('The weather is nice')
  })
})
