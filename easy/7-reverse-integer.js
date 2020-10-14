const reverse = function (a) {
  let reversed =
    parseInt(Math.abs(a).toString().split("").reverse().join(""), 10) *
    Math.sign(a);
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};
