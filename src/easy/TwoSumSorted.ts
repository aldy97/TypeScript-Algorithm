//Two pointers implemented
function twoSumSorted(numbers: number[], target: number): number[] {
  let first = 0;
  let second = numbers.length - 1;
  while (first !== second) {
    const sum = numbers[first] + numbers[second];
    if (sum === target) {
      return [first + 1, second + 1];
    } else if (sum < target) {
      first++;
    } else {
      second--;
    }
  }
  return [-1, -1];
}
