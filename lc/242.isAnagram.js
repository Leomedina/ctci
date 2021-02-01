/** check if two string are anagrams of each other */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const feqCounter = {};

  for (let char of s) {
    feqCounter[char] = ++feqCounter[char] || 1;
  };

  for (let char of t) {
    if (!feqCounter[char]) return false;
    feqCounter[char] = --feqCounter[char];
  };

  return true;
};