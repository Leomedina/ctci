/** Run length encoder   */
function runLengthEncoding(string) {
  let counter = 1;
  let res = [];

  for (let i = 1; i <= string.length; i++) {
    const current = string[i];
    const prev = string[i - 1];
    if (current !== prev || counter === 9) {
      res.push(counter.toString());
      res.push(prev)
      counter = 0;
    };
    counter++;
  };

  return res.join('');
};


console.log(runLengthEncoding(";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s"));