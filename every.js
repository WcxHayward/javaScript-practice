Array.prototype.mEvery = function (cb, ...args) {
  let flag = true
  for (let i = 0; i < this.length; i++) {
    flag = cb(this[i], i, this)
    if (!flag) break
  }
  return flag
}
const players = [
  { name: '科比', num: 24 },
  { name: '詹姆斯', num: 23 },
  { name: '保罗', num: 3 },
  { name: '威少', num: 0 },
  { name: '杜兰特', num: 35 }
]
let flag = players.mEvery((item) => {
  return item.num < 23
})
console.log(flag);
