
const buf1 = Buffer.from('a')
const buf2 = Buffer.from('b')
const buf3 = Buffer.from('c')
const arr = [buf1, buf2, buf3]

// Join the array into one buffer object:
const buf = Buffer.concat(arr)
console.log(buf)
console.log(buf.toString())
console.log(buf.toJSON())
