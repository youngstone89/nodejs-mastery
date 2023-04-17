const numbers = [1, 2, 3]
console.log(numbers)
console.log(...numbers)

const numbers2 = [4, 5, 6]

const merged = [...numbers, ...numbers2]
console.log(...merged)

function printIndividual (...args) {
  console.log(...args)
}

printIndividual(...merged)
