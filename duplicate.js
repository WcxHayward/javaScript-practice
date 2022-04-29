function duplicate(nums) {
  let result = []
  nums.reduce((pre, next) => {
    if (!pre.has(next)) {
      pre.set(next, 0)
      result.push(next)
    }
    return pre
  }, new Map())
  return result
}
