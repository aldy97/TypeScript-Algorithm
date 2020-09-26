//O(logn) solution using binary search
/**keys:
 * 1. there is always one part (left/right) that is sorted in
 * 2. find the min in the sorted part
 *  **/
function findMinInRoatedSoredArray(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    //when the left part is sorted
    if (nums[left] <= nums[mid]) {
      min = nums[left] < min ? nums[left] : min;
      left = mid + 1;
    } else {
      min = nums[mid] < min ? nums[mid] : min;
      right = mid - 1;
    }
  }
  return min;
}
