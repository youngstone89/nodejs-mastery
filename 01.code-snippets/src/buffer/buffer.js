const buf = Buffer.from('Hello, World')

console.log(buf.toString())

const bufEmpty = Buffer.from('')
const chunks = [bufEmpty]

console.log(chunks.length)

chunks.push(bufEmpty)

console.log(chunks.length)

const emptyChunks = []
console.log(emptyChunks.length)
