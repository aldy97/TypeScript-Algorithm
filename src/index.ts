function longestPalindrome(s: string): string {
  if (s === null) {
    return '';
  }
  if (s.length === 1) {
    return s;
  }
  if (s.length === 2) {
    return s[0] === s[1] ? s : '';
  }
  let centerIndex = s.length % 2 === 0 ? s.length / 2 : (s.length - 1) / 2;
  let result = s[centerIndex];
  let left = centerIndex;
  let right = centerIndex;
  while (s[left - 1] && s[right + 1]) {
    if (s[left - 1] === s[right + 1]) {
      left = left--;
      right = right++;
    } else if (s[left] === s[left + 1]) {
      left--;
    } else if (s[right] === s[right - 1]) {
      right++;
    }
  }
  console.log(result.slice(left, right + 1));
  return result.slice(left, right + 1);
}

console.log(longestPalindrome('abbbabs'));
