# Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**

```
Input: 123
Output: 321
```

**Example 2:**

```
Input: -123
Output: -321
```

**Example 3:**

```
Input: 120
Output: 21
```

**Note:**
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

# solution

Actually, it's really easy if you are familiar with the JavaScript API.

```js
const reverse = function (a) {
  let reversed =
    parseInt(Math.abs(a).toString().split("").reverse().join(""), 10) *
    Math.sign(a);
  // emulate the overflow 
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};

```

- [Math.sign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)

  This function return +1/-1/0 when the argument is > / < / = 0.

- 

