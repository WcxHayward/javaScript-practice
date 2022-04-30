Array.prototype.mFilter = function (cb) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this) && res.push(this[i])
  }
  return res
}
let a = [1, 2, 3, 4]
let b = a.mFilter((item) => {
  return item <= 2
})
console.log(b);
