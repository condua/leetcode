/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let pre = nums[0];
  console.log(nums.splice(0,1));
  for (let i = 1; i < nums.length; ) {
    if (nums[i] !== pre) {
      pre = nums[i];
      i += 1;
    } else {
      nums.splice(i, 1);
    }
    console.log(nums)
  }
  return nums.length;
};
console.log(removeDuplicates([1,2,2,3,3,4,5,5,6,7,8]));


// const explainSplice = function(nums){
//   nums.splice(0,1);
//   return nums;

// }
// console.log(explainSplice([1,2,3,4,5]))
