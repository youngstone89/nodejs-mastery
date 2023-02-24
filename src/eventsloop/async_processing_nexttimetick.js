function someAsyncOperation (item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item)
    }, 1) // Wait for 1 second before resolving
  })
}

function processItemsAsync (items) {
  function processNextItem () {
    if (items.length) {
      // do some work asynchronously
      processItemAsync(items.shift())
      process.nextTick(processNextItem)
    } else {
      // continue with other tasks
    }
  }

  processNextItem()
}

async function processItemAsync (item) {
  const result = await someAsyncOperation(item)
  console.log(result)
}

const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8']
processItemsAsync(items)
