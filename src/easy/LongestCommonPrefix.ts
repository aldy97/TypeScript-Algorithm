function longestCommonPrefix(strs: string[]) {
  if (strs.length === 0 || strs === null) {
    return '';
  }
  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== c) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}
