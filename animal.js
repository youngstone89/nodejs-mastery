
function animal (params) {
  this.age = params.age
  this.legs = params.legs
}

animal.prototype.describe = function () {
  console.log(`age: ${this.age}, legs: ${this.legs}`)
}

animal.prototype.sound = function () {
  console.log('bow wow')
}

module.exports = animal
