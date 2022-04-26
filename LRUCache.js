// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；
// 如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，
// 则应该 逐出 最久未使用的关键字。

function LRUCache(size) {
  this.cache = new Map()
  this.size = size

  this.get = (key) => {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
    }
    else
      return -1
  }
  this.put = (key, value) => {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      this.cache.delete(key)
    }
    this.cache.set(key, value)
    if (this.cache.size > this.size)
      this.cache.delete(this.cache.keys().next().value)
  }
}
