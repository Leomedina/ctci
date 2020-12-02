/**
 * 
 * 1029. Two City Scheduling
 * 
 *  A company is planning to interview 2n people. 
 *    Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying 
 *          the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.
 * 
 * Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
 */


/**
 * twoCitySchedCost
 * @param {number[][]} costs
 * @return {number} 
 */

function twoCitySchedCost(costs) {
  for (let cost in costs) {
    costs[cost] = costs[cost].reduce((accum, currVal)=> accum + currVal);
  };
  return costs;
};


var costs = [[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]];

console.log(twoCitySchedCost(costs));