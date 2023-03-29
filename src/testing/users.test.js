const request = require('supertest')
const app = require('./app')

describe('GET /users/:id', () => {
  it('returns the correct user profile', async () => {
    // Mock the getUserById function to return a test user
    const mockUser = { id: '1', name: 'Alice', email: 'alice@example.com' }
    jest.mock('./app', () => ({
      getUserById: jest.fn(() => mockUser)
    }))

    // Use Supertest to make a request to the API endpoint
    const response = await request(app).get('/users/1')

    // Check that the response is correct
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ name: 'Alice', email: 'alice@example.com' })
  })

  it('returns an error for an invalid user ID', async () => {
    // Mock the getUserById function to return null
    jest.mock('./app', () => ({
      getUserById: jest.fn(() => null)
    }))

    // Use Supertest to make a request to the API endpoint
    const response = await request(app).get('/users/999')

    // Check that the response is correct
    expect(response.status).toBe(404)
    expect(response.body).toEqual({ message: 'User not found' })
  })
})
