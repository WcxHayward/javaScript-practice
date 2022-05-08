function all(promises) {
  let result = []
  let count = 0
  return new Promise((resolve, reject) => {
    const setData = (res, index) => {
      result[index] = res
      count++
      if (count === promises.length) resolve(result)
    }
    promises.forEach((promise, index) => {
      if (promise instanceof Promise)
        promise.then(res => {
          setData(res, index)
        }, err => reject(err))
      else {
        setData(promise, index)
      }
    });
  })
}
const p1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("p1 true")
    }, 1000);
  })
}
const p2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("p2 true")
    }, 2000);
  })
}
const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p3 false")
    }, 3000);
  })
}
all([p1(), p2(), p3()]).then(res => {
  console.log(res);
})
