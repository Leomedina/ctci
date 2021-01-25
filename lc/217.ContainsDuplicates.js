/** Checks if there are any duplicates in array */

function containsDuplicates(nums) {
  const freq = {};
  for (let i of nums) {
    freq[i] = freq[i] + 1 || 1;
    if (freq[i] > 1) return true;
  };
  return false;
};

console.log(containsDuplicates([1, 2, 3])); // false
console.log(containsDuplicates([1, 2, 3, 2])); // true
console.log(containsDuplicates(['a', 'b', 'c', 'a'])); // true