function User () {
  this.name = 'Bob'
}
const user = new User()

console.log(user)

function UserWithNameAndAge (name, age) {
  this.name = name
  this.age = age
}

const user1 = new UserWithNameAndAge('bob', 25)
console.log(user1)

UserWithNameAndAge.prototype.dosomething = function () {
  console.log('do something')
}

UserWithNameAndAge.prototype.dosomething()

const user2 = new UserWithNameAndAge('bob', 25)
user1.dosomething()
user2.dosomething()

// not recommended
// Strings, numbers, booleans should not be declared as objects since they hinder performance.
const a = new Object()
const b = new String()
const c = new String('bob')
const d = new Number()
const e = new Number(25)
const f = new Boolean()
const g = new Boolean(true)
