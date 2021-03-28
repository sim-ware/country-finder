const utils = require('../utils');

test('filters an Array of Objects by those with the key:region value:"Europe"', () => {
  const exampleJson = [
    {
      nativeName: 'United Kingdom',
      capital: 'London'
    },
    {
      nativeName: 'Tattoine',
      capital: 'Bestine Township'
    },
  ]

  expect(utils.mapToNameAndCapital(exampleJson)).toStrictEqual(
    [
      {
        countryName: "United Kingdom",
        capitalCity: "London"
      },
      {
        countryName: "Tattoine",
        capitalCity: "Bestine Township"
      },
    ]
  );
});