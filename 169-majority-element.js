
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// 给定一个长度为 n 的数组， 找到多数元素。多数元素是指出现了 n/2 次以上的元素。

// You may assume that the array is non-empty and the majority element always exist in the array.


// We know that the majority element occurs more than n/2 times, and a HashMap allows us to count element occurrences efficiently.




const majorityElement = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length/2)];
};

console.log(majorityElement([2,2,1,1,1,2,2]));

