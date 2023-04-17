const now = new Date()
console.log(now.getFullYear().toString())
console.log(now.getMonth().toString())
console.log(('0' + (1 + now.getMonth()).toString()))
console.log(('0' + (1 + now.getMonth()).toString()).slice(-2))
console.log(now.getMilliseconds())
console.log(('00' + now.getMilliseconds().toString()).slice(-3))

console.log(('0' + now.getDay().toString()).slice(-2))

function getDateNowString () {
  return now.getFullYear().toString() +
        ('0' + (1 + now.getMonth()).toString()).slice(-2) +
        ('0' + now.getDay().toString()).slice(-2) +
        '-' +
        ('0' + now.getHours().toString()).slice(-2) +
        ('0' + now.getMinutes().toString()).slice(-2) +
        ('0' + now.getSeconds().toString()).slice(-2) +
        ('00' + now.getMilliseconds().toString()).slice(-3)
}

console.log(getDateNowString())
console.log(now.getDay())
