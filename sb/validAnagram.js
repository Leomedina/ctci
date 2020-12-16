/**
 * 
 * Make a validAnagram using frequency counter method 
 * 
 */

// isValidAnagram
// "aaz" , "zza" -> false
// "anagram", "nagaram" -> true
// "awesom", "awesome" -> false
// "tacocat", "cattaco" -> true

// {a: 2, z:1} !== {a:1, z:2} 
function isValidAnagram(base, check) {
  if(base.length !== check.length) return false;
  const freq1 = getFrequency(base);
  const freq2 = getFrequency(check);

  for (key of Object.keys(freq1)) {
    if (freq1[key] !== freq2[key]) return false;
  };
  return true
};

function getFrequency(str) {
  const map = new Map();

  for (char of str.toLowerCase()) {
    map[char] = (map[char] + 1) || 1
  };

  return map;
};

console.log(isValidAnagram("aAz", "zzaa"));
console.log(isValidAnagram("aAz", "zza"));
console.log(isValidAnagram("awesom", "awesome"));
console.log(isValidAnagram("tacocat", "cattaco"));
console.log(isValidAnagram("tacocata", "cattaaco"));