const isPalindrome = function (x) {
    return parseInt(x.toString().split("").reverse().join(""), 10) == x ? true : false;
};
