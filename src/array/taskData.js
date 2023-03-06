
const vaDataPass = {
  ContactID: 'dummy'
}

const paylooad = {
  taskData: vaDataPass
}

console.log(paylooad)

const empty = {

}
empty.sessionId = 'qwerasdf'

console.log(Object.values(empty).length === 0)
console.log(Object.keys(empty).length === 0)

console.log(empty)

const payload = {
  taskData: empty
}
console.log(payload)
