type numInfo = {
  num: number;
  index: number[];
};

function findMaxLength(list: numInfo[]): number {
  const listIndexLength = list.map((info) => info.index.length);
  let max = 0;
  for (let i = 0; i < listIndexLength.length; i++) {
    if (listIndexLength[i] > max) {
      max = listIndexLength[i];
    }
  }
  return max;
}

function getLength(list: number[]): number {
  if (list === null) return 0;
  return list[list.length - 1] - list[0] + 1;
}

function getSmallest(list: number[]): number {
  let min = 50000;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
}

function findShortestSubArray(nums: number[]): number {
  let numInfoList: numInfo[] = [];
  if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (numInfoList.map((numInfo) => numInfo.num).includes(nums[i])) {
      numInfoList.filter((numInfo) => numInfo.num === nums[i])[0].index.push(i);
    } else {
      numInfoList.push({ num: nums[i], index: [i] });
    }
  }
  const maxLength = findMaxLength(numInfoList);

  const ans = getSmallest(
    numInfoList
      .filter((numinfo) => numinfo.index.length === maxLength)
      .map((numInfo) => numInfo.index)
      .map((index) => getLength(index))
  );
  return ans;
}
