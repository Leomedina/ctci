/** Two Sum */

function findTwoSum(a, t) {
  const map = {};

  for (let i in a) {
    let diff = t - a[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[a[i]] = i
  };
};

console.log(findTwoSum([2, 7, 11, 15], 9));
console.log(findTwoSum([2, 7, 11, 15], 9)); // [1 ,2]
console.log(findTwoSum([3, 3], 6));