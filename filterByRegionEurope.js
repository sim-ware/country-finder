function filterByRegionEurope(countryArray) {
  console.log('countryArray', countryArray)
  return countryArray.filter(country => country.region === "Europe")
}
module.exports = filterByRegionEurope;