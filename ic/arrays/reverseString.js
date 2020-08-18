/** String must be reversed in place */

/**
 * 
 * Complexity
 * Space: O(1)
 * Time: O(n)
 * 
 */
function revString(string) {
  return string.reverse();
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

    const temp = array[leftIndex];
    
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  return array;
}

console.log(revString(["A","R","R","Y"]))