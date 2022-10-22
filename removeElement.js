/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let numLen = nums.length;

  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      numLen--;
      nums.push("-");
    } else {
      i++;
    }
  }

  return numLen;
};
