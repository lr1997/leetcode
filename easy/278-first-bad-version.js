const solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      // 之前是好的现在坏了，那就是这个版本
      if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
        return mid;
      }

      // 好的，往后查找
      if (!isBadVersion(mid)) {
        left = mid + 1;
      }

      // 好的
      if (isBadVersion(mid) && isBadVersion(mid - 1)) {
        right = mid - 1;
      }
    }
  };
};
