const formatUrl = require('./formatUrl');

test('adds the input string from the Command Line to the root Url', () => {
  const url = 'https://testcountries.eu/test/v2/name/'
  const inputString = 'test'
  expect(formatUrl(url, inputString)).toBe('https://testcountries.eu/test/v2/name/test');
});