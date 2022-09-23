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
