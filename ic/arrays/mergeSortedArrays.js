const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

/**
 * 
 * Complexity:
 * Space: O(1);
 * Time: O(n log n);
 * 
 */

function mergeArrays(array, secondArray) {
  array.push(...secondArray);
  array.sort((a, b) => a - b);
  return array;
}

/**
 * 
 * Complexity:
 * Space:TBD
 * Time: O(n) - how can we do this?
 * 
 * 
  */



console.log(mergeArrays(myArray, alicesArray));