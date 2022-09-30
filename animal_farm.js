const Animal = require('./animal')

const dog = new Animal({ age: 1, legs: 4 })

dog.sound()
dog.describe()

const cat = new Animal({ age: 1 })

cat.sound()
cat.describe()
