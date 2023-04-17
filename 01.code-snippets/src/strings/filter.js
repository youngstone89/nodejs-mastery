const ages = [32, 33, 16, 40]
const result = ages.filter(checkAdult)

function checkAdult (age) {
  return age >= 18
}
console.log(result)

const url = 'https://api.twitter.com/a/b/c'

const parsed = url.split('/')
  .filter(function (path) {
    return path.endsWith('.com')
  })

console.log(parsed)
