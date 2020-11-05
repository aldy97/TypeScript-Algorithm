//Build two dp table: one without last house, one without first house
//Time complexity: O(n), where n = numbers of houses
//Space complexity: O(n)
function robII(nums: number[]): number {
  //base cases:
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length <= 2) {
    return nums.length === 1 ? nums[0] : Math.max(...nums);
  }

  function solve(nums: number[]) {
    const size = nums.length;
    //init dp table
    let dp: number[] = new Array(size).fill(0);
    dp[0] = nums[0];

    for (let i = 1; i < size; i++) {
      //dp[1] is decided by choosing whether to rob the first or the second
      if (i === 1) {
        dp[i] = Math.max(dp[i - 1], nums[i]);
      } //the rest is determined by choose to rob the current or not
      else {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
      }
    }

    return dp[size - 1];
  }

  const withoutLast = nums.slice(0, nums.length - 1);
  const withoutFirst = nums.slice(1, nums.length);
  return Math.max(solve(withoutFirst), solve(withoutLast));
}
