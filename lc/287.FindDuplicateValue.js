function firstDuplicateValue(array) {
  const map = {};

  for (let i of array) {
    if (map[i]) return i;
    else map[i] = i;
  };

  return -1;
};


