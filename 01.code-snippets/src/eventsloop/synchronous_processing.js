
function processItems (items) {
  while (items.length) {
    // do some work synchronously
    processItem(items.shift())
  }
  // continue with other tasks
}

function processItem (item) {
  console.log('Processing:', item)
}

const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8']
processItems(items)
