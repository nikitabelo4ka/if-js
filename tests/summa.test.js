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
console.log(sum(5)(2)(3).getResult());

test('When adding new valid product, get successful configuration', () => {
  expect(sum(5,3).toBe(8);
});
