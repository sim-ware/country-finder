const filterByRegionEurope = require('../filterByRegionEurope');

test('filters an Array of Objects by those with the key:region value:filter', () => {
  const exampleJson = [
    { region:   "Africa" },
    { region: "Americas" },
    { region:     "Asia" },
    { region:   "Europe" },
    { region:   "Europe" },
    { region:   "Africa" },
  ]

  expect(filterByRegionEurope(exampleJson)).toStrictEqual(
    [
      { region:   "Europe" },
      { region:   "Europe" },
    ]
  );
});