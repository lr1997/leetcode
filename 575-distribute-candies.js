// You have n candies, the ith candy is of type candies[i].
// You want to distribute the candies equally between a sister and a brother so that each of them gets n / 2 candies (n is even).
// The sister loves to collect different types of candies, so you want to give her the maximum number of different types of candies.

// 给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果。
// 把这些糖果平均分给一个弟弟和一个妹妹，则每个人可以得到 n/2 个糖果。
// 妹妹喜欢收集糖果，尽可能分给妹妹不同种类的糖果，返回妹妹可以获得的最大糖果的种类数。

// [1,1,2,2,3,3] 3种 每种2个
// [1,1,2,3] 3种， 分别有2、1、1个

const distributeCandies = function (candies) {
  let map = new Map();
  for (let i = 0; i < candies.length; i++) {
    if (map.has(candies[i])) {
      map.set(candies[i], map.get(candies[i]) + 1);
    } else {
      map.set(candies[i], 1);
    }
  }

  return Math.min(map.size, candies.length / 2);
};

// console.log(distributeCandies([1, 1, 2, 2, 3, 3, 4, 4, 4, 4]));
