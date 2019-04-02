/// title: 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/// 比如 abcde ，那么 abc bcd 算子串，adb 不算

export const lengthOfLongestSubstring = (s: string): number => {
  const stringLength = s.length;
  let maxLength = 0;
  let start = 0;
  let end = 0;

  for (; end < stringLength; end++) {
    const at = s.charAt(end);
    const range = s.substring(start, end);
    const i = range.indexOf(at);
    if (i !== -1) {
      maxLength = Math.max(maxLength, end - start);
      start += i + 1;
    }
  }
  
  return Math.max(maxLength, end - start);
}