function MockApi () {
  this.data = {
    count: 0
  }
}

// recurisve do and print count
MockApi.prototype.do = function () {
  console.log(`do print ${this.data.count}`)
  setTimeout(() => {
    this.do()
  }, 100)
}

MockApi.prototype.increase = function () {
  this.data.count += 1
  console.log(`increased count: ${this.data.count}`)
  setTimeout(() => {
    this.increase()
  }, 100)
}

MockApi.prototype.increase2 = function () {
  this.data.count += 1
  console.log(`increased2 count: ${this.data.count}`)
  setTimeout(() => {
    this.increase2()
  }, 100)
}

MockApi.prototype.start = function () {
  this.do()
  this.increase()
  this.increase2()
}

const MockAPI = new MockApi()

MockAPI.start()
