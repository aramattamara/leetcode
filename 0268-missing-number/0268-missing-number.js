/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

// first solution //====================
    
//     let actualSum = 0;
//     for (let i = 0; i < nums.length; i++){
//         actualSum += nums[i]
//     }
    
//     let expectedSum = 0; 
//     for (let i = 0; i <= nums.length; i++){
//         expectedSum += i
//     }
    
//     let number = expectedSum - actualSum
//     return number
    
// second solution //==================
//     const n = nums.length;
//     let expectedSum = (n * (n + 1)) / 2;
    
//     const actualSum = nums.reduce((acc, current) => acc + current, 0)

//     let number = expectedSum - actualSum
    
//     return number

// third solution (if there is no missing numbers ) //=====================    
    let temp = new Set(nums);

    for (let i = 0; i < nums.length; i++) {
        if (!temp.has(i)) {
            return i
        }
    }

    return nums.length;

};