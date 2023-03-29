const express = require('express')
const app = express()

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  // Assume that we have a user database that we can query here
  const user = getUserById(id)
  if (user) {
    res.json({
      name: user.name,
      email: user.email
    })
  } else {
    res.status(404).json({ message: 'User not found' })
  }
})

// Function to get a user from the database by ID
function getUserById (id) {
  // Assume that we have a user database that we can query here
  // This is just a mock implementation for demonstration purposes
  const users = {
    1: { id: '1', name: 'Alice', email: 'alice@example.com' },
    2: { id: '2', name: 'Bob', email: 'bob@example.com' }
  }
  return users[id]
}

module.exports = app
