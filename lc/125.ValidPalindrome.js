function isValidPalindrome(s) {
  if (s.length === 1) return true;
  s = s.toLowerCase();
  s = s.replace(/ |,|:|;|$/g, '');
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  };
  return true;
};

console.log(isValidPalindrome("a."));