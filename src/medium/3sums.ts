function uniqBy(a: number[][], key: Function) {
  var index: any = [];
  return a.filter(function (item) {
    var k = key(item);
    return index.indexOf(k) >= 0 ? false : index.push(k);
  });
}

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => {
    return a - b;
  });
  let result: number[][] = [];
  const size = nums.length;
  for (let i = 0; i < size; i++) {
    let p1 = i + 1;
    let p2 = size - 1;
    const newTarget = -nums[i];
    while (p1 < p2) {
      const sum = nums[p1] + nums[p2];
      if (sum > newTarget) {
        p2--;
      } else if (sum < newTarget) {
        p1++;
      } else {
        result.push([nums[i], nums[p1], nums[p2]]);
        p1++;
        p2--;
      }
    }
  }
  return uniqBy(result, JSON.stringify);
}
