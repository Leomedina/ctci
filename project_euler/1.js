/**
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 * */

function findMultiples(max) {
  const multiples = []
  for (i = 0; i < max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}

const answer = findMultiples(1000).reduce(function (accum, current) { return accum + current }, 0)

console.log(answer);
