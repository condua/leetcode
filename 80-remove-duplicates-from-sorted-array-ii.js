/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums){
  for(let i =0; i<nums.length;)
  {
    if( i >= 0 && i -1 >=0 && i - 2 >= 0 && nums[i] === nums[i - 1] && nums[i] === nums[i - 2])
    {
      nums.splice(i,1);
    }else{
      i++;
    }
  }
  return nums.length;
}
console.log(removeDuplicates([1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,5,5]));

