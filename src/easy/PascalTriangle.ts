function generate(numRows: number): number[][] {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let result = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    let rowResult: number[] = [1];
    for (let j = 1; j < i; j++) {
      rowResult.push(result[i - 1][j - 1] + result[i - 1][j]);
    }
    rowResult.push(1);
    result.push(rowResult);
  }
  return result;
}

console.log(generate(5));
