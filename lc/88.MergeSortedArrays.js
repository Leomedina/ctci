/**
 * merge - this two pointer technique ONLY works with SORTED ARRAYS.
 *
 * @param {number[]} array
 * @param {number[]} array1
 * @return {number[]}
 *
 */

function merge(arr, arr1) {
  const result = [];
  let i = 0; // pointer 1 for arr
  let j = 0; // pointer 2 for arr1

  while (i < arr.length && j < arr1.length) {
    if (arr[i] < arr1[j]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr1[j]);
      j++;
    };
  };

  while (i < arr.length) {
    result.push(arr[i]);
    i++;
  }

  while (j < arr1.length) {
    result.push(arr1[j]);
    j++;
  };
  return result;
}