/**
 * 
 * 1. TwoSum - SORTED ARRAY. THIS ONLY WORKS WITH SORTED ARRAY
 * 
 *  Given an array of integers and a target integer return indices 
 *      of the two numbers such that they add up to target.
 * 
 *  You can assume there is one answer. You may *not* use the same element twice.
 * 
 *  How to handle negative numbers?
 *  
 *  Tags: Two-Pointers, Arrays
 * 
 */



/**
 * twoSum - this two pointer technique ONLY works with SORTED ARRAYS.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 */

function twoSum(nums, target) {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (startIdx !== nums.length - 1) {
    const sum = nums[startIdx] + nums[endIdx];

    if (sum === target) return [startIdx, endIdx];

    if (sum < target) {
      startIdx++;
    } else {
      endIdx--;
    };
  };
  return undefined;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([1, 2, 5, 7, 11, 15], 9)); // [1,3]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
// console.log(twoSum([-1, -2, -3, -4, -5],))