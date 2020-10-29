const myArray = [3, 4, 6, 6, 6, 6, 10, 11, 15];
const alicesArray = [1, 5, 5, 5, 8, 12, 14, 19];

/**
 * 
 * Complexity:
 * Space: O(1);
 * Time: O(n log n);
 * 
 */

function badMergeArrays(array, secondArray) {
  array.push(...secondArray);
  array.sort((a, b) => a - b);
  return array;
};

/**
 * 
 * Complexity:
 * Space: O(2n)
 * Time: O(nm)
 * 
 * 
*/

function mergeSortedArrays(array1, array2) {
  const result = [];
  let i = 0;
  let j = 0;


  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    };
  };

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  };
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  };
  return result;
};

console.log(mergeSortedArrays(myArray, alicesArray));