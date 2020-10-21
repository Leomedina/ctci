/**
 * 
 * 643. Maximum Average Subarray
 * 
 *  Given an array consisting of n integers, find the contiguous subarray 
 *     of given length k that has the maximum average value. And you need to 
 *     output the maximum average value.
 *  
 *  You can assume K will always be positive.
 * 
 */

/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/

function findMaxAverage(nums, k) {
  if (k > nums.length) return getAverage(nums);
  if (nums.length === 1) return nums[0];

  let startIdx = 0;
  let endIdx = startIdx + k;
  let highAvg = 0;


  while (endIdx <= nums.length) {
    const subarray = nums.slice(startIdx, startIdx + k);
    const average = getAverage(subarray);

    highAvg = average > highAvg ? average : highAvg;

    startIdx++;
    endIdx++;
  }
  return highAvg;
};

function getAverage(array) {
  const sum = array.reduce((acc, cv) => acc + cv);
  return sum / (array.length);
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));