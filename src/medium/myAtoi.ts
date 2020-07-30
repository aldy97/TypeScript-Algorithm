function myAtoi(str: string) {
  if (isNaN(parseInt(str))) {
    return 0;
  } else {
    //当判断为数字时，比较是否超出32-bit的范围
    if (parseInt(str) >= 2147483647) {
      return 2147483647;
    } else if (parseInt(str) <= -2147483648) {
      return -2147483648;
    }
    return parseInt(str);
  }
}
