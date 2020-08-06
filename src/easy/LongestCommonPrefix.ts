function longestCommonPrefix(strs: string[]): string {
  //base case:
  if (strs.length === 0 || strs === null) {
    return '';
  }
  //外层循环：i为第一个字符串的指针：字符串的index
  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      //Vertical comparison: terminates when one string has been drained OR chars at the same index are not identical.
      if (i === strs[j].length || strs[j].charAt(i) !== c) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}
