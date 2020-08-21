class NumArray {
  sum: number[] = [];
  constructor(nums: number[]) {
    this.sum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.sum[i] = this.sum[i - 1] + nums[i];
    }
  }

  sumRange(i: number, j: number): number {
    if (i === 0) {
      return this.sum[j];
    }
    return this.sum[j] - this.sum[i - 1];
  }
}
