function combinationSum2(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  let temp: number[] = [];
  candidates.sort((a, b) => a - b);
  backtrack(target, 0);
  return result;

  function twoArrEquals(A: number[], B: number[]): boolean {
    if (A.length !== B.length) {
      return false;
    } else {
      for (let index = 0; index < A.length; index++) {
        if (A[index] !== B[index]) {
          return false;
        }
      }
    }
    return true;
  }

  function alreadyIncluded(result: number[][], single: number[]): boolean {
    for (let i = 0; i < result.length; i++) {
      if (twoArrEquals(result[i], single)) {
        return true;
      }
    }
    return false;
  }

  function backtrack(target: number, current: number) {
    if (target === 0) {
      if (!alreadyIncluded(result, temp)) {
        return result.push(temp.slice());
      }
    } else if (current === candidates.length || target < 0) {
      return;
    } else {
      //choose to add the current
      temp.push(candidates[current]);
      backtrack(target - candidates[current], current + 1);

      //choose to skip the current
      temp.pop();
      if (temp[temp.length - 1] !== candidates[current]) {
        backtrack(target, current + 1);
      }
    }
  }
}
