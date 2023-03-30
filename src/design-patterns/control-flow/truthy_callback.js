function DoCallBack (cb) {
  if (cb) {
    cb()
  } else {
    console.log('CallBack not called')
  }
}

DoCallBack(() => {
  console.log('CallBack called')
})

DoCallBack()
