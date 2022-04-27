function debounce(fn, wait) {
  let timer, that = this
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(that, args)
    }, wait)
  }
}



