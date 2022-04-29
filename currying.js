function currying(fn, ...args) {
  const fnLength = fn.length
  let allArgs = [...args]
  const res = (...arg) => {
    allArgs = [...allArgs, ...arg]
    if (allArgs.length === fnLength) {
      return fn(...allArgs)
    } else {
      return res
    }
  }
  return res
}
const add = (a, b, c) => a + b + c;
const a = currying(add, 1)(2)(4);
console.log(a)
