type mapProps = {
  [key: number]: string;
};
const map: mapProps = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

function letterCombinations(digits: string): string[] {
  let result: string[] = [];
  const prep = [...digits].map((char) => parseInt(char)).map((num) => map[num]);
  console.log(prep);

  return result;
}

console.log(letterCombinations('23'));
