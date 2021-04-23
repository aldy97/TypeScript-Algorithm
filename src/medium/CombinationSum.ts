//backtracking solution
function combinationSum(candidates: number[], target: number): number[][] {
  var buffer: number[] = [];
  var result: number[][] = [];
  search(0, target);
  return result;

  function search(startIdx: number, target: number) {
    //calling slice() without passing any argument in it makes a shallow copy
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    buffer.push(candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);
  }
}
