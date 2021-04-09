const dict: { [num: string]: string[] } = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};
// Insights: backtrack
// Time: O((4 ^ n) * n)
// Space: O(n)
function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const res: string[] = [];
  findComb(digits, "", res);
  return res;
}

const findComb = (digits: string, curr: string, res: string[]): void => {
  if (curr.length === digits.length) {
    res.push(curr);
    return;
  } else {
    for (const char of dict[digits[curr.length]]) {
      findComb(digits, curr + char, res);
    }
  }
};
