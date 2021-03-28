const utils = require('../utils');

test('checks the Command Line Argument and Returns False if formatted incorrectly', () => {
  const checkOne = utils.checkCliArg(['united'])
  const checkTwo = utils.checkCliArg([2])
  const checkThree = utils.checkCliArg(['united', 'kingdom'])
  expect(checkOne).toBe(true);
  expect(checkTwo).toBe(false);
  expect(checkThree).toBe(false);
});