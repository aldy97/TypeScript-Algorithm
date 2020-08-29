function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => {
    return a - b;
  });
  let diff: number = Infinity;
  for (let i = 0; i < nums.length && diff !== 0; i++) {
    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 < p2) {
      let sum = nums[i] + nums[p1] + nums[p2];
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum;
      }
      if (sum < target) {
        p1++;
      } else {
        p2--;
      }
    }
  }
  return target - diff;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
