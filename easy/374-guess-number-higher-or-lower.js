const guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (!guess(mid)) {
      return mid;
    }

    if (guess(mid) > 0) {
      left = mid + 1;
    }

    if (guess(mid) < 0) {
      right = mid - 1;
    }
  }
};
