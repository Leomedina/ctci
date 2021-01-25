/**
 * Implementation of a basic binary search
 */

function BinarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== target && start <= end) {
    if (array[start] < target) start = middle - 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  };

  if (array[middle] === target) {
    return middle;
  } else {
    return -1;
  }
};