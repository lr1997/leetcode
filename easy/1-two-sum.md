# Two Sum

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly\* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

 

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

 

**Constraints:**

- `2 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- **Only one valid answer exists.**



### solution 1

It's a way of brute force, just two layer of for-loop, so, nothing to say.

```js
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]+nums[j]===target) {
                return [i,j];
            }
        }   
        
    }
};
```

### solution 2

1. 创建一个 Map 。
2. Use the for loop to iterate through the array.
3. Check if there is a number equals to ( target - nums[i] )
   1. If yes, return the index of this number and the index of ( target - nums[i] )
   2. If no, add an element with **num[i]** as the key and **i** as the value.

```js
const twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
}
```

