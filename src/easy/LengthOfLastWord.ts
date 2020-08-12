function lengthOfLastWord(s: string): number {
  if (s === null) return 0;
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && res !== 0) {
      return res;
    } else if (s[i] === ' ' && res === 0) {
      res--;
    }
    res++;
  }
  return res;
}

console.log(lengthOfLastWord('a '));
