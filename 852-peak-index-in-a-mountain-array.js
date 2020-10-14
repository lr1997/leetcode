const peakIndexInMountainArray = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // 上山
    if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
      left = mid;
    }

    // 下山
    if (nums[mid] < nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      right = mid;
    }

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    }
  }
};

console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]));