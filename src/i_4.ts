/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

const singleNumber = (nums: number[]) => {
  const _nums: number[] = [];
  for (const v of nums) {
    const i = _nums.indexOf(v);
    if (i > -1) {
      _nums.splice(i, 1);
    } else {
      _nums.push(v);
    }
  }
  return _nums.pop();
}

const singleNumberII = (nums: number[]) => {
  const numMap = new Map();
  for (const v of nums) {
    numMap.set(v, v);
  }
  return numMap.values().next().value;
}

const singleNumberIII = (nums: number[]) => {
  const numSet = new Set(nums);
  return numSet.values().next().value;
}

console.log(singleNumberIII([4,1,2,1,2]));