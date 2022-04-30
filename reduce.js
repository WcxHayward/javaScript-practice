Array.prototype.mReduce = function (cb, ...args) {
  let start = 0, pre
  if (args.length) pre = args[0]
  else {
    pre = this[0]
    start = 1
  }
  for (let i = start; i < this.length; i++) {
    pre = cb(pre, this[i], i, this)
  }
  return pre
}
const players = [
  { name: '科比', num: 24 },
  { name: '詹姆斯', num: 23 },
  { name: '保罗', num: 3 },
  { name: '威少', num: 0 },
  { name: '杜兰特', num: 35 }
]

const sum = players.mReduce((pre, next) => {
  return pre + next.num
}, 0)
console.log(sum) // 85
