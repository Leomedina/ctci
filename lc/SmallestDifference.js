function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let smallest = [arrayOne[0], arrayTwo[1]];

  while (i < arrayOne.length && j < arrayTwo.length) {
    let cMin = arrayOne[i] - arrayTwo[j];
    let gMin = smallest[0] - smallest[1];

    if (cMin === 0) return [arrayOne[i], arrayTwo[j]];
    if (Math.abs(cMin) < Math.abs(gMin)) smallest = [arrayOne[i], arrayTwo[j]];
    if (arrayOne[i] < arrayTwo[j]) i++;
    else j++;

  };
  return smallest;
};

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));