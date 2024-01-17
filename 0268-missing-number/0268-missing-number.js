/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const length = nums.length + 1; 

    
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++){
        actualSum += nums[i]
    }
    
    let expectedSum = 0; 
    for (let i = 0; i < length; i++){
        expectedSum += i
    }

    let number = expectedSum - actualSum
    return number
};