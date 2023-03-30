
function ModuleOne () {
  console.log('initialized')
  this.count = 0
}

ModuleOne.prototype.funcOne = function (cb) {
  console.log('funcOne called', this.count)
  //   const boundCb = cb.bind(this)
  //   boundCb()
  cb()
}

ModuleOne.prototype.funcTwo = function () {
  if (this.count === 10) {
    return
  }
  this.count += 1
  console.log('funcTwo called: ', this.count)
  this.funcOne(this.funcTwo.bind(this))
}

const moduleOne = new ModuleOne()
moduleOne.funcTwo()
