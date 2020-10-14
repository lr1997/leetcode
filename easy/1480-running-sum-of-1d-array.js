const runningSum = function (nums) {
  let runningSum = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
      runningSum[i] = sum;
  }

  return runningSum;
};
