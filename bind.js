const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

const member = {
  firstName: 'Hege',
  lastName: 'Nilsen'
}

const fullName = person.fullName.bind(member)
console.log(fullName())

const person2 = {
  firstName: 'John',
  lastName: 'Doe',
  display: function () {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

person2.display()

setTimeout(person2.display, 1000) // Hello, undefined!

const boundFunc = person2.display.bind(person2)

boundFunc()
