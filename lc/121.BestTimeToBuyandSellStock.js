/**
 *  121. Best Time to Buy and Sell Stock - Given an array of stock priced (ordered by time), return 
 *    the max profit you can earn. Note: you must buy the stock before selling it
 *
 * @param {number[]} prices
 * @return {number}
 *
 */

function maxProfit(prices) {
  let maxProfit = 0;
  let lowestPrice = prices[0];

  for (let price of prices) {
    let currentProfit;
    if (price < lowestPrice) lowestPrice = price;
    currentProfit = price - lowestPrice;

    maxProfit = Math.max(currentProfit, maxProfit);
  };

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))