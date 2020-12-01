/**
 * 
 * 78. Subsets
 * 
 * Given an integer array nums, return all possible subsets (the power set).
 *    The solution set must not contain duplicate subsets.
 * 
 */


/**
 * findSubsets
 * @param {number} nums
 * @return {number[]} 
 */

function findSubsets(numbers) {
  let subsets = [[]];

  for (let number of numbers) {
    let subset = new Set([...subsets]);
    subsets.forEach(num => subset.add([...num, number]));
    subsets = [...subset];
  };

  return subsets;
};

console.log(findSubsets([1, 2, 3]));
console.log(findSubsets([1]));
