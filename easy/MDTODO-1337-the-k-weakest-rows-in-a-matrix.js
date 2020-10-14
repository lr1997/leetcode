const kWeakestRows = function (mat, k) {
  let map = new Map();

  // 遍历计算每一排的士兵数量
  for (let i = 0; i < mat.length; i++) {
    let numberOfsoldiers = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] == 1) {
        numberOfsoldiers++;
      }
    }
    map.set(i, numberOfsoldiers);
  }

  let array = Array.from(map)
    .sort(function (a, b) {
      return a[1] - b[1];
    })
    .slice(0, k);

  let weakestRows = [];

  for (let i = 0; i < array.length; i++) {
    weakestRows.push(array[i][0]);
  }
  return weakestRows;
};
