/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length < 2) return words[0].length

  let firstWordLength = words[0].length;
  let secondWordLength = words[1].length;

  if (firstWordLength > secondWordLength) {
    return longest(words.splice(0, 1));
  } else {
    return longest(words.splice(1, 1));
  };
};

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let newStr = "";

  function isEvenIndex(str, idx) {
    if (idx % 2 === 0) newStr += str[idx]
  }

  for (let i = 0; i < str.length; i++) {
    isEvenIndex(str, i);
  }

  return newStr;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let array = str.split('');
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {

    const temp = array[leftIndex];

    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  return array.join("");

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
