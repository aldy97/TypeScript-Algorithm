type mapProps = {
  [key: number]: string;
};
const map: mapProps = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  let result: string[] = [];
  function backtrack(index: number, curr: string) {
    if (index === digits.length) {
      result.push(curr);
      return;
    }
    for (const char of map[parseInt(digits[index])]) {
      backtrack(index + 1, curr + char);
    }
  }
  backtrack(0, "");
  return result;
}

console.log(letterCombinations("23"));
