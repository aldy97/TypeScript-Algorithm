//Time complexity: O(nlogn)
function topKFrequent(nums: number[], k: number): number[] {
  let map: { [key: number]: number } = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  let temp: number[][] = [];
  for (let num of new Set(nums)) {
    temp.push([num, map[num]]);
  }
  temp.sort((a, b) => b[1] - a[1]);
  const sliedTemp = temp.slice(0, k);
  let result: number[] = [];
  for (let [a, b] of sliedTemp) {
    result.push(a);
  }
  return result;
}

//Time complexity: O(n)
//Notice that the maximum frequency is the size of nums
function topKFrequent2(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();
  const bucket: (number | Set<number>)[] = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = bucket[freq] ? num : new Set<number>().add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
}
