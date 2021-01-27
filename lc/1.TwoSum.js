/** Two Sum */

function findTwoSum(a, t) {
  if (a.length < 2) return [];
  const map = {};

  for (let i in a) {
    let diff = t - a[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[a[i]] = i
  };

  return [];
};

console.log(findTwoSum([2, 7, 11, 15], 9));
console.log(findTwoSum([2, 7, 11, 15], 9)); // [1 ,2]
console.log(findTwoSum([3, 3], 6));