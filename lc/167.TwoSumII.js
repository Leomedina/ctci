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

function twoSum(a, t) {
  let left = 0;
  let right = a.length - 1;

  while (left < right) {
    let total = a[left] + a[right];

    if (total === t) return [left + 1, right + 1];
    if (total > t) right = right - 1;
    if (total < t) left = left + 1;
  };

  return false;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([1, 2, 5, 7, 11, 15], 9)); // [2,4]
console.log(twoSum([3, 3], 6)); // [1,1]