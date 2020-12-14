//backtraking solution, Time Complexity: O(N⋅2^N), Space complexity: O(n)
function partition(s: string): string[][] {
  if (s.length === 0) {
    return [];
  }
  let results: string[][] = [];
  const n = s.length;

  function isPalindrome(s: string): boolean {
    if (s.length === 0) {
      return true;
    }
    const n = s.length;
    let p1 = 0;
    let p2 = n - 1;
    while (p1 < p2) {
      if (s[p1] !== s[p2]) {
        return false;
      }
      p1++;
      p2--;
    }
    return true;
  }

  function backtrack(result: string[], curr: number) {
    if (curr === n) {
      results.push(result);
    } else {
      //i tracks the index that we currently at in the given string
      for (let i = curr; i < n; i++) {
        const seg = s.slice(curr, i + 1);
        if (isPalindrome(seg)) {
          backtrack([...result, seg], i + 1);
        }
        //no need for curr.pop(), because we are certain the curr is always correct and will make it to the end
      }
    }
  }
  backtrack([], 0);
  return results;
}
