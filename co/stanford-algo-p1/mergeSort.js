function mergeSort(a, b) {


};

function mergeSortedArrays(a, b) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++
    };
  };

  if (i < a.length) {
    for (let i = i; i < a.length; i++) {
      result.push(a[i]);
    };
  };

  if (j < b.length) {
    for (let i = j; i < b.length; i++) {
      result.push(b[i]);
    };
  };

  return result;
};

console.log(mergeSortedArrays([1, 3, 4, 5], [2, 5, 6, 7]));