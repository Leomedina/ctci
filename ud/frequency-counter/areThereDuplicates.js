/** Checks if there are any duplicates in array */

function areThereDups(a) {
  const freq = {};
  for (let i of a) {
    freq[i] = freq[i] + 1 || 1;
    if (freq[i] > 1) return true;
  };
  return false;
};

console.log(areThereDups([1, 2, 3])); // false
console.log(areThereDups([1, 2, 3, 2])); // true
console.log(areThereDups(['a', 'b', 'c', 'a'])); // true