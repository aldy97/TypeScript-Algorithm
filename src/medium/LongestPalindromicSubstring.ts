// helper: expand around the center(s)
function expandAroundCenter(s: string, left: number, right: number): string {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  // second param: right - left + 1 - 2 = right - left - 1, which is total length of the substr
  return s.substr(left + 1, right - left - 1);
}

// Insight: we have total of 2n - 1 centers for odd len and even len
// Time: O(n^2);
// Space: O(1);
function longestPalindrome(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    //s[i] centered: odd length
    let s1 = expandAroundCenter(s, i, i);
    //s[i], s[i+1] centered: even length
    let s2 = expandAroundCenter(s, i, i + 1);

    result = result.length > s1.length ? result : s1;
    result = result.length > s2.length ? result : s2;
  }

  return result;
}

console.log(longestPalindrome("bababadbabad"));
