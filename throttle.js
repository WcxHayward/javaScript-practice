function throttle(fn, wait) {
  let flag = true, that = this
  return function (...args) {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(that, args)
    }, wait)
  }
}

