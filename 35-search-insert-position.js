// 给定一个已排序的数组和一个目标值，如果找到目标，则返回索引。 如果不是，则返回按顺序插入索引的位置的索引。
// 您可以假设数组中没有重复项。

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    if (target < nums[mid] && target>) {
      right = mid - 1;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 2));
