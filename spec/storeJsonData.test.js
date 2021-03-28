const utils = require('../utils');
const fs = require('fs')

const path = 'spec/test.json'

test('checks the JSON is saved to the correct filepath', () => {
  utils.storeJsonData({ test: 'test' }, path)
  const test = fs.existsSync(path)
  const rawdata = fs.readFileSync(path);
  const testData = JSON.parse(rawdata);

  expect(test).toBe(true);
  expect(testData).toStrictEqual({ test: 'test' })

  fs.unlinkSync(path)
});