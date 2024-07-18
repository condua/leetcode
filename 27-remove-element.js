/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/**Hàm removeElement nhận vào một mảng nums và một giá trị val.
 * Mục đích của hàm là loại bỏ tất cả các phần tử có giá trị bằng val khỏi mảng nums 
 * và trả về số lượng các phần tử còn lại không bằng val. */

const removeElement = function(nums,val){
  let j = 0;
  for(let i = 0; i<nums.length; i++)
  {
    if(nums[i] !== val)
    {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}

console.log(removeElement([1,2,3,4,4,5,5], 5))