/// 两数之和

export const twoSumMap = (nums: number[], target: number): number[] | undefined => {
  let m = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const v = target - element;
    if (m.has(v)) {
      return [m.get(v), index];
    }
    m.set(element, index);
  }
}

export const twoSumSimple = (nums: number[], target: number): number[] | undefined => {
  for (let index = 0; index < nums.length; index++) {
    for (let j = index + 1; j < nums.length; j++){
      if (nums[j] === target - nums[index]) {
        return [index ,j];
      }
    }
  }
}