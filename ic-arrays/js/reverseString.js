/** String must be reversed in place */

/**
 * 
 * Complexity 
 * Space: O(n)
 * Time: O(n)
 * 
 */
function revString(string) {
  return string.split("").reverse().join("");
}

/**
 * 
 * Complexity 
 * Space: O(1)
 * Time: O(n)
 * 
 */
function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {

    const temp = array[leftIndex]
    
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp

    leftIndex++;
    rightIndex--;
  }
}

reverse(['h','e','l','l','l'])