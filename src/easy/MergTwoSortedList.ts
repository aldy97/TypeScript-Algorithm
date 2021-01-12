// Insight: insert value backwards in order to avoid overflow
// Time: O(m + n)
// Space: O(1)
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  // the index at which we start to insert value
  let insertPos = m + n - 1;

  m--;
  n--;

  // In JavaScript, any Number > undefined is true
  while (n >= 0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
}
