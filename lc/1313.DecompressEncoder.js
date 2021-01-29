/** Decompress Run Length Encoder */


function decompressRLEncoder(a) {
  const res = [];
  let p1 = 0;
  let p2 = 1;

  while (p2 <= a.length - 1) {
    for (let i = 0; i < a[p1]; i++)
      res.push(a[p2]);
    p1 += 2;
    p2 += 2;
  };

  return res.join('');
};


console.log(decompressRLEncoder([1, 1, 2, 3])); // [1, 3, 3];
console.log(decompressRLEncoder([1, 2, 3, 4])); // [2, 4, 4, 4, 4];