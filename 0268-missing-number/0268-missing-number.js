/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length; 

    
//     let actualSum = 0;
//     for (let i = 0; i < nums.length; i++){
//         actualSum += nums[i]
//     }
    
//     let expectedSum = 0; 
//     for (let i = 0; i < length; i++){
//         expectedSum += i
//     }
    
    let expectedSum = (n * (n + 1)) / 2;
    
    const actualSum = nums.reduce((acc, current) => acc + current, 0)

    let number = expectedSum - actualSum
    
    return number
};