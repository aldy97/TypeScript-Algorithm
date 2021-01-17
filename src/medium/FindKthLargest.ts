// Brute Force
// Time: O(nlogn)
// Space: O(1)
function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => a - b)[nums.length - k];
}

// Quick sort
// Time: O(n) in average, O(n^2) in worst case
// Space: O(1)
function findKthLargest2(nums: number[], k: number): number {
  function helper(start: number, end: number, k: number): number {
    let i = start;
    const pivot = nums[end];

    for (let j = start; j < end; j++) {
      if (nums[j] > pivot) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
      }
    }

    const temp = nums[i];
    nums[i] = pivot;
    nums[end] = temp;

    const count = i - start + 1;
    if (count === k) {
      return nums[i];
    } else if (count < k) {
      return helper(i + 1, end, k - count);
    } else {
      return helper(start, i - 1, k);
    }
  }

  return helper(0, nums.length - 1, k);
}
