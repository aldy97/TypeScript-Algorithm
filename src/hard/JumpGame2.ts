// Insights: always jump to the place that will take us the farthest
// Time: O(n)
// Space: O(1)
function jumpGame2(nums: number[]): number {
  let end = 0;
  let furthestJump = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    furthestJump = Math.max(furthestJump, nums[i] + i);
    // if we have come to the end of the current jump, we need to make another jump:
    if (end === i) {
      jumps++;
      end = furthestJump;
    }
  }

  return jumps;
}
