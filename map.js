Array.prototype.mMap = function (cb) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this))
  }
  return res
}
let a = [1, 2, 3, 4, 5]
let b = a.mMap((item, index) => {
  return item + index
})
console.log(b);
