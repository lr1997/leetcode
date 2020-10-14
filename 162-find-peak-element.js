const findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    // 下坡
    if (nums[mid] > nums[mid + 1] && nums[mid] < nums[mid - 1]) {
      right = mid - 1;
    }

    // 上坡
    if (nums[mid] < nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      left = mid + 1;
    }

    // 山顶
    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    }
  }
};

console.log(findPeakElement([1, 2, 3, 1]));
