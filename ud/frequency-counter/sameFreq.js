/** Same Frequency Counter */

function sameFrequency(n, n1) {
  n = n.toString();
  n1 = n1.toString();
  const counter = {};
  const counterOne = {};

  for (let num of n) {
    counter[num] = counter[num] + 1 || 1;
  };

  for (let num of n1) {
    counterOne[num] = counterOne[num] + 1 || 1;
  };

  for (let key in counter) {
    if (counter[key] !== counterOne[key]) return false;
  };

  return true;
};

console.log(sameFrequency(1234, 2341));
console.log(sameFrequency(1234, 234));
console.log(sameFrequency(1234, 241));
