function plusOne(digits: number[]): number[] {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  //当运行到这一步，说明原先的digits是一串9，但目前已经都为0，用unshift在开头加上1即可。
  digits.unshift(1);
  return digits;
}
