function person () {

}

const person1 = new person()
const person2 = new person()

person.prototype.getType = () => {
  console.log('hi')
}
console.log(person1.getType())
console.log(person1.getType())
console.log(person2)
