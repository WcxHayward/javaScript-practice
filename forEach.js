Array.prototype.mForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this)
  }
}
const arr = [1, 2, 3, 4, 5]
arr.mForEach((item, index) => {
  console.log(item, index);
})
