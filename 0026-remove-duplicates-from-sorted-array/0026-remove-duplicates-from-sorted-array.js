/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    
  if (nums.length === 0) {
    return [];
  }
  
  let unique = 0;
  
  for (let j = 1; j < nums.length; j++){
    if (nums[j] !== nums[unique]) {
      unique++;
      nums[unique] = nums[j]
    } 
    
  }
  nums.length = unique + 1;
  
  console.log(nums)
    
};