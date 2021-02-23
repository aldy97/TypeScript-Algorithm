// Insights: when A knows B, then B is candidate and A is for sure NOT a celebrity.
// If A does not know B, then A is a candidate and B is for sure NOT a celebrity
// Time: O(n)
// Space: O(1)
var solution = function (knows: any) {
  return function (n: number): number {
    let candidate = 0;
    function isCelebrity(i: number) {
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (knows(i, j) || !knows(j, i)) {
          return false;
        }
      }
      return true;
    }
    for (let i = 0; i < n; i++) {
      if (knows(candidate, i)) {
        candidate = i;
      }
    }
    if (isCelebrity(candidate)) {
      return candidate;
    }

    return -1;
  };
};
