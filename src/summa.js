function sum(a) {
  let currentSum = a;

  function secondSum(b) {
    currentSum += b;
    return secondSum;
  }
  secondSum.getResult = function returnSum() {
    return currentSum;
  };
  return secondSum;
}

module.exports = { sum };
