/** String must be reversed in place */

function revString(string) {
  return string.split("").reverse().join("")
}

console.log(revString("Hello"))