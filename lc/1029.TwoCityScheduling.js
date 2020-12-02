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
  let total = 0;
  let c = costs.length / 2; //number of people per city
  let cityA = 0;
  let cityB = 0;
  let index = 0;

  costs.sort((a, b) => (a[0] - a[1]) + (b[0]) - b[1]);
  // This will loop until one of the cities hits the cap per city
  while (cityA !== c || cityB !== c) {
    let costA = costs[index][0];
    let costB = costs[index][1];

    if (cityA === c) {
      cityB++;
      total += costB;
    } else if (cityB === c) {
      cityA++;
      total += costA;
    } else if (costA < costB) {
      cityA++;
      total += costA;
    } else if (costB < costA) {
      cityB++;
      total += costB;
    };
    index++;
  };
  return total;
};


var costs = [[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]];

console.log(twoCitySchedCost(costs));