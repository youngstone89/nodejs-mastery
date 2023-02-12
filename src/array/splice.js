const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

const index = myFish.indexOf('clown')
console.log('index:', index)

myFish.splice(index, 1)

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log(myFish)
