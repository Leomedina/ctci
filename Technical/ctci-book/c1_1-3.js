/**
 * Chapter 1. Arrays and Strings - Problem 1.3
 *
 * URLify:
 * write a method that replaces all ' ' with '%20' 
 * -> do it in-place
 */

let url = "Mr John Smith"


/**
 * 
 * Complexity:
 * 
 * Time: O(n ^ n) -> not great 
 * Space: O(1) -> mutates it in place
 * 
 */

function URLify(url) {
  for (let i = 0; i < url.length; i++) {
    if (url[i] === ' ') {
      url = url.replace(' ', '%20')
    }
  };
  return url
};

/**
 * 
 * Complexity (better solution):
 * 
 * Time: O(n) -> but is this actually of O(n)? 
 * Space: O(n) -> copes to array, it would be O(1) if the input is an array
 * 
 */
function URLifyBetter(url) {
  const urlArray = url.split('');

  for (let i = url.length; i > 0; i--) {
    let temp = [];
    if (urlArray[i] === " ") {
      temp = urlArray.splice(i + 1)
      urlArray.pop();
      urlArray.push("%20");
      urlArray.push(...temp);
    }
  }
  return urlArray.join('');
}

console.log(URLify(url));
console.log(URLifyBetter(url));