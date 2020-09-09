//helper:deals with boses cases in which length of palindrome is even/odd.
function palindrome(s: string, left: number, right: number) {
  //boundary caution
  while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substr(left + 1, right - left - 1);
}

function longestPalindrome(s: string): string {
  //base case:
  if (s.length === 0 || s.length === 1) return s;
  let result: string = '';
  for (let i = 0; i < s.length; i++) {
    //s[i] centered: odd length
    let s1 = palindrome(s, i, i);
    //s[i], s[i+1] centered: even length
    let s2 = palindrome(s, i, i + 1);
    result = result.length > s1.length ? result : s1;
    result = result.length > s2.length ? result : s2;
  }
  return result;
}
