const jsonObject = {
  name: 'John',
  age: 30,
  city: 'New York'
}

let objectArray = [jsonObject] // convert a single JSON object to an array of objects
console.log(objectArray)
// or
objectArray = Object.values(jsonObject) // convert a JSON object to an array of objects

console.log(objectArray) // [{name: "John", age: 30, city: "New York"}]
