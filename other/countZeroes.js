/**
 * 
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, 
 *    which returns the number of zeroes in the array.
 * 
 * Time Complexity: O(log N)
 * 
**/


function countZeroes(array) {
  let leftIndex = 0;
  let rightIndex = array.length;
  let middleIndex;
  let midValue;
  let zeroCount = 0

  while (leftIndex <= rightIndex) {
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    midValue = array[middleIndex];
    
    if (midValue > 0) leftIndex = middleIndex;
    if (midValue === 0) zeroCount++;
    leftIndex++;
  }
  return zeroCount;
}



/** Test Cases: */
console.log(countZeroes([1, 1, 1, 1, 0, 0])) // 2
console.log(countZeroes([1, 0, 0, 0, 0])) // 4
console.log(countZeroes([0, 0, 0])) // 3
console.log(countZeroes([1, 1, 1, 1])) // 0