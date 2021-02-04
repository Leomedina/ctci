function productSum(array, multiplier = 2) {
  let sum = 0;
  for (let i in array) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], multiplier + 1) * multiplier;
    } else {
      sum += array[i];
    };
  };
  return sum;
};