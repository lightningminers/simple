/// title: 两数之和

class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val: number){
    this.val = val;
    this.next = null;
  }
}

const MAX_LENGTH = String(Number.MAX_SAFE_INTEGER).split('').length;
const MAYBE_MAX_LENGTH = MAX_LENGTH - 3;

const bigNumberSum = (x: number[], y: number[]): number[] => {
  const xLen = x.length;
  const yLen = y.length;
  const bigIndex = Math.max(xLen, yLen);
  const result: number[] = [];
  let carrOne = false;
  for (let index = 0; index < bigIndex || carrOne; index++) {
    const sum: number = (carrOne ? 1 : 0) + (x[xLen - 1 - index] || 0) + (y[yLen - 1 - index] || 0);
    carrOne = sum > 9;
    result[index] = carrOne ? sum - 10 : sum;
  }
  return result.reverse();
}


/// TODO !!! 这样实现性能不是很好，还可以优化
/// ERROR !!! 错在大数值上了，谨记 Number.MAX_SAFE_INTEGER  16位
export const addTwoNumbers = (l1: ListNode | null , l2: ListNode | null): ListNode => {
  const listNode = new ListNode(0);
  const x = [];
  const y = [];
  let i = -1;
  let curr = listNode;
  let sum;
  let f;
  while(l1 !== null || l2 !== null) {
    if (l1 !== null) {
      x.unshift(l1.val);
      l1 = l1.next;
    }
    if (l2 !== null) {
      y.unshift(l2.val);
      l2 = l2.next;
    }
  }
  if (x.length > MAYBE_MAX_LENGTH || y.length > MAYBE_MAX_LENGTH) {
    sum = bigNumberSum(x, y);
    f = sum.reverse();
  } else {
    sum = Number(x.join('')) + Number(y.join(''));
    f = String(sum).split('').reverse();
  }
  while(true) {
    i = i + 1;
    if (i === 0) {
      listNode.val = Number(f[i]);
      continue;
    } 
    if (f[i] === undefined) {
      break;
    }
    curr.next = new ListNode(Number(f[i]));
    curr = curr.next;
  }
  return listNode;
}


//// big number sum 测试数据 
const test1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
const test2 = [4,6,5];
const test3 = [1,8];
const test4 = [0];
const test5 = [1];
const test6 = [9,9];
const test7 = [5];
const test8 = [5];
const test9 = [0];
const test10 = [9];
const test11:number[] = [];
const test12 = [2,3,4];
const result1 = bigNumberSum(test1, test2);
const result2 = bigNumberSum(test2, test1);
const result3 = bigNumberSum(test4, test3);
const result4 = bigNumberSum(test5, test6);
const result5 = bigNumberSum(test7, test8);
const result6 = bigNumberSum(test9, test10);
const result7 = bigNumberSum(test11, test12);

console.log('测试结果1', result1);
console.log('测试结果2', result2);
console.log('测试结果3', result3);
console.log('测试结果4', result4);
console.log('测试结果5', result5);
console.log('测试结果6', result6);
console.log('测试结果7', result7);