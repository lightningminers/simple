// 求众数
// 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

const majorityElement = (nums: number[]) => {
  const len = nums.length;
  const arr: number[] = [];
  let t = 0;
  let i = 0;
  for(; i < len; i ++) {
    if (t === 0 || arr[t - 1] === nums[i]) {
      arr[t] = nums[i];
      t++;
    } else {
      t--;
    }
  }
  return arr[t - 1];
}

/**
 * 摩尔投票法这个算法相当于在一次顺序的投票过程中，
 * 假设[2,2,2,1,1,2]，相同票数的+1，不同票数的-1，等=0时之前已经相抵，
 * 于是临时变量可以存储新值，继续一轮。
 * @param nums 
 */
const majorityElementII = (nums: number[]) => {
  let majority = -1;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      majority = num;
      count ++;
    } else {
      if (majority === num){
        count ++;
      } else {
        count --;
      }
    }
  }

  // 校验一下是不是真的
  let counter = 0;
  if (count <= 0) {
    return -1;
  } else {
    for (const v of nums) {
      if (v === majority) {
        counter ++;
      }
    }
  }
  if (counter > nums.length/2) {
    return majority;
  }
  return -1;
}

console.log(majorityElementII([2,2,1,1,1,2,2]));
console.log(majorityElementII([]));