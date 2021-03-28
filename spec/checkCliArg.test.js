const checkCliArg = require('../checkCliArg');

test('checks the Command Line Argument and Returns False if formatted incorrectly', () => {
  const checkOne = checkCliArg(['united'])
  const checkTwo = checkCliArg(['united', 'kingdom'])
  expect(checkOne).toBe(true);
  expect(checkTwo).toBe(false);
});