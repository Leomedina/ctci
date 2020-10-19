/**
 *  Maximum Subarray
 * 
 * Given an integer array nums,
 *    find the contiguous subarray (containing at least one number)
 *    which has the largest sum and return its sum.
 *
 * Follow up: If you have figured out the O(n) solution, 
 *    try coding another solution using the divide and conquer approach, which is more subtle.
 *
 * Pattern: Sliding Window and divide and conquer
 *  
 * Uses Kadane's Algorithm, Sliding Window, Dynamic Programming
*/


/**
 * @param {number[]} nums
 * @return {number}
*/

function maxSubArray(nums) {
  let maxCurrent, maxGlobal = nums[0]; //sets maxes to first number in array

  for (let i = 1; i < nums.length - 1; i++) {
    maxCurrent = Math.max(maxCurrent, (maxCurrent + nums[i]));
    if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
  };

  return maxGlobal;
};



/** Tests */
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([0])) // 0
console.log(maxSubArray([-2147483647])) // -2147483647 