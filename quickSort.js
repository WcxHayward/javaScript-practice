function quickSort(nums) {
  sort(nums, 0, nums.length - 1)
  return nums
}
function sort(nums, start, end) {
  if (start >= end) return false
  let left = start, right = end, mid = nums[Math.floor((start + end) / 2)]
  while (left <= right) {
    while (left <= right && nums[left] < mid) left++
    while (left <= right && nums[right] > mid) right--

    if (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
    sort(nums, start, right)
    sort(nums, left, end)

  }
}

