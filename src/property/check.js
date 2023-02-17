const isNil = function (parameter) {
  if (parameter === null || parameter === undefined || parameter === '') {
    return true
  }
}

const validateConfig = function (keys, config) {
  if (isNil(config)) {
    return false
  }

  if (isNil(keys)) {
    return false
  }

  return keys.every(key => Object.prototype.hasOwnProperty.call(config, key))
}

console.log(validateConfig(['a', 'b'], { a: 1, b: 2 }))
