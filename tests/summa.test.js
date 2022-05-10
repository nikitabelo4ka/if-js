const {sum} = require('../summa');

test('Finding sum', () => {
  expect(sum(3)(5).getResult()).toBe(8);
});
