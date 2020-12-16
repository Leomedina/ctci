function mergeSort(a) {
  if (a.length <= 1) return a;

  let mid = Math.floor(a.length / 2);
  let halfA = mergeSort(a.slice(0, mid));
  let halfB = mergeSort(a.slice(mid));

  return mergeSortedArrays(halfA, halfB);
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

  while (i < a.length) {
    result.push(a[i]);
    i++
  };

  while (j < b.length) {
    result.push(b[j]);
    j++
  }

  return result;
};

console.log(mergeSort([1, 4, 6, 78, 98, 3, 2]));