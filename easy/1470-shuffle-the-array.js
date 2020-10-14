const shuffle = function (nums, n) {
  let shuffled = [];
  for (let i = 0; i < nums.length/2; i++) {
    shuffled.push(nums[i]);
    shuffled.push(nums[i+n]);
  }

  return shuffled;
};
