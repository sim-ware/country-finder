const utils = require('../utils');

test('filters an Array of Objects by those with the key:region value:"Europe"', () => {
  const exampleJson = [
    { region:   "Africa" },
    { region: "Americas" },
    { region:     "Asia" },
    { region:   "Europe" },
    { region:   "Europe" },
    { region:   "Africa" },
  ]

  expect(utils.filterByRegionEurope(exampleJson)).toStrictEqual(
    [
      { region:   "Europe" },
      { region:   "Europe" },
    ]
  );
});