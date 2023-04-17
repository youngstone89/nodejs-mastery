const list = [1, 2, 3]

function addOne (number) {
  return number + 1
}

Promise.all(
  list.map(n => addOne(n))
).then(
  res => console.log(res)
)
