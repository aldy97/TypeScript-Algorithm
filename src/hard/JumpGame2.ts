//Assumes that its for sure the end point is reachable.
function jumpGame2(nums: number[]): number {
  let end = 0;
  let furthestJump = 0;
  let jumps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    furthestJump = Math.max(furthestJump, nums[i] + i);
    if (end === i) {
      jumps++;
      end = furthestJump;
    }
  }
  return jumps;
}
