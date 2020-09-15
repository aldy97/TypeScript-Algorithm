enum Index {
  GOOD,
  BAD,
  UNKNOWN,
}

//memo:bottom-up
function canJump1(nums: number[]): boolean {
  let memo = new Array(nums.length).fill(Index.UNKNOWN);
  memo[memo.length - 1] = Index.GOOD;
  for (let i = nums.length - 2; i >= 0; i--) {
    const furthestJump = Math.min(i + nums[i], nums.length - 1);
    for (let j = i + 1; j <= furthestJump; j++) {
      if (memo[j] === Index.GOOD) {
        memo[i] = Index.GOOD;
        break;
      }
    }
  }
  return memo[0] === Index.GOOD;
}

//greedy algorithm
function canJump2(nums: number[]): boolean {
  const size = nums.length;
  let furthestJump = 0;
  for (let i = 0; i < size - 1; i++) {
    furthestJump = Math.max(furthestJump, i + nums[i]);
    if (furthestJump <= i) return false;
  }
  return furthestJump >= size - 1;
}
