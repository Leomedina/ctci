/**
 * Given two strings determine if the second string is an anagram of the first.
 *  Return true if it is, else return false
 */

function isAnagram(s, s1) {
  if (s.length !== s1.length) return false;
  const freqCounter = {};

  for (let char of s) {
    freqCounter[char] = ++freqCounter[char] || 1;
  };
  for (let char of s1) {
    if (!freqCounter[char]) return false;
    freqCounter[char] = --freqCounter[char];
  };
  return true;
}

console.log(isAnagram('a', 'b')) // false
console.log(isAnagram('aaz', 'zza')) // False
console.log(isAnagram('anagram', 'nagaram')) // True
console.log(isAnagram('rat', 'cat')) // False
console.log(isAnagram('awesome', 'awesom')) // False