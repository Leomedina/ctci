/**
 * 
 * Reverse Words as an array in place
 * 
 *  in: ['s','t','e','a','k','s', ' ' , 'r','u','l','e',' ','a','l','l']
 *  out: ['a','l','l',' ' ,'r','u','l','e',' ','s','t','e','a','k','s']
 *   
 */

let testArray = ['s', 't', 'e', 'a', 'k', 's', ' ', 'r', 'u', 'l', 'e', ' ', 'a', 'l', 'l'];
/*['a', 'l', 'l', ' ', 'r', 'u', 'l', 'e',' ', 's', 't', 'e','a', 'k', 's']
*/


function reverseWords(arrayString) {
  // fancy way of reversing an array in place - see ReverseString.Js for a manual implementation
  reverse(arrayString, 0, arrayString.length - 1);
  let currentWordStartIndex = 0;

  for (let i = 0; i <= arrayString.length; i++) {
    if (arrayString[i] === " " || i === arrayString.length) {
      reverse(arrayString, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  };
  return arrayString;
}

function reverse(mainArray, left, right) {
  let leftIndex = left;
  let rightIndex = right;

  while (leftIndex < rightIndex) {

    const temp = mainArray[leftIndex];

    mainArray[leftIndex] = mainArray[rightIndex];
    mainArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
}


console.log(reverseWords(testArray))

