//O(logn)
function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }
  if (nums.length === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }
  let result: number[] = [];
  let p1 = 0;
  let p2 = nums.length - 1;
  while (p1 <= p2) {
    let mid = Math.floor((p2 + p1) / 2);
    if (nums[mid] === target) {
      result.push(mid);
    }
    //when both halves have target
    if (
      target >= nums[p1] &&
      target <= nums[mid - 1] &&
      target >= nums[mid + 1] &&
      target <= nums[p2]
    ) {
      nums[p1] === target ? result.push(p1) : result;
      nums[p2] === target ? result.push(p2) : result;
      p1++;
      p2--;
    } //when only the left half has the target
    else if (target >= nums[p1] && target <= nums[mid - 1]) {
      p2 = mid - 1;
    } //when only the right half has the target
    else if (target >= nums[mid + 1] && target <= nums[p2]) {
      p1 = mid + 1;
    } else {
      break;
    }
  }
  return result.length === 0
    ? [-1, -1]
    : [Math.min(...result), Math.max(...result)];
}

console.log(searchRange([1], 1));
