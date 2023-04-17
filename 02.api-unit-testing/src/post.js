// post.js
const fetch = require('node-fetch');

async function getPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

module.exports = {
  getPosts,
};