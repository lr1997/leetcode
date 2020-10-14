# 找出给定方程的正整数解

给出一个函数 `f(x, y)` 和一个目标结果 `z`，请你计算方程 `f(x,y) == z` 所有可能的正整数 **数对** `x` 和 `y`。给定函数是严格单调的，也就是说：

- `f(x, y) < f(x + 1, y)`

- `f(x, y) < f(x, y + 1)`

函数接口定义如下：

```
interface CustomFunction {
public:
  // Returns positive integer f(x, y) for any given positive integer x and y.
  int f(int x, int y);
};
```

如果你想自定义测试，你可以输入整数 function_id 和一个目标结果 z 作为输入，其中 function_id 表示一个隐藏函数列表中的一个函数编号，题目只会告诉你列表中的 2 个函数。  

你可以将满足条件的 结果数对 按任意顺序返回。

**例 1:**

```
Input: function_id = 1, z = 5
Output: [[1,4],[2,3],[3,2],[4,1]]
Explanation: function_id = 1 means that f(x, y) = x + y
```

**例 2:**

```
Input: function_id = 2, z = 5
Output: [[1,5],[5,1]]
Explanation: function_id = 2 means that f(x, y) = x * y
```

 