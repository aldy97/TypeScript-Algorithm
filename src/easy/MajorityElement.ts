type KR = {
  key: number;
  rep: number;
};

function majorityElement(nums: number[]): number {
  let hashMap: KR[] = [];
  for (let i = 0; i < nums.length; i++) {
    const mappedKey = hashMap.map((item) => item.key);
    if (mappedKey.includes(nums[i])) {
      hashMap[mappedKey.indexOf(nums[i])].rep++;
    } else {
      hashMap.push({ key: nums[i], rep: 1 });
    }
  }
  const mappedRep = hashMap.map((item) => item.rep);
  return hashMap[mappedRep.indexOf(Math.max(...mappedRep))].key;
}
