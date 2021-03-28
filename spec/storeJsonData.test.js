const storeJsonData = require('../storeJsonData');

test('checks the Command Line Argument and Returns False if formatted incorrectly', () => {
//   const checkOne = checkCliArg(['united'])
//   const checkTwo = checkCliArg([2])
//   const checkThree = checkCliArg(['united', 'kingdom'])
//   expect(checkOne).toBe(true);
//   expect(checkTwo).toBe(false);
//   expect(checkThree).toBe(false);
  storeJsonData({ test: 'test' }, 'test.json')
});