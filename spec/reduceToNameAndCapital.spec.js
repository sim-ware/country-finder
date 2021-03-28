const reduceToNameAndCapital = require('../reduceToNameAndCapital');

test('filters an Array of Objects by those with the key:region value:"Europe"', () => {
  const exampleJson = [
    {
      nativeName: 'United Kingdom',
      capital: 'London'
    },
  ]

  expect(reduceToNameAndCapital(exampleJson)).toStrictEqual(
    [
      {
        countryName: "United Kingdom",
        capitalCity: "London"
      },
    ]
  );
});