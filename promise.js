function mPromise(executor) {
  var status = 'pending'
  var result = null
  var reason = null
  var fulfilledCallbacks = []
  var rejectedCallbacks = []

  this.resolve = function (value) {
    if (status !== 'pending') return false
    status = 'fulfilled'
    result = value
    while (fulfilledCallbacks.length) {
      fulfilledCallbacks.shift()(result)
    }
  }

  this.reject = function (value) {
    if (status !== 'pending') return false
    status = 'rejected'
    reason = value
    while (rejectedCallbacks.length) {
      rejectedCallbacks.shift()(reason)
    }
  }

  try {
    executor(this.resolve, this.reject)
  } catch (error) {
    this.reject(error)
  }

  this.then = function (onFulfilled, onRejected) {
    if (status === 'fulfilled') {
      onFulfilled(result)
    } else if (status === 'rejected') {
      onRejected(reason)
    } else if (status === 'pending') {
      fulfilledCallbacks.push(onFulfilled)
      rejectedCallbacks.push(onRejected)
    }
  }
}

let prem = new mPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
  }, 1000)
})


prem.then(res => console.log(res), err => 3 * err)

