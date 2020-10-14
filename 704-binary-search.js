const search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target > nums[mid]) {
      low = mid + 1;
    }

    if (target < nums[mid]) {
      high = mid - 1;
    }

    if (target == nums[mid]) {
      return mid;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
