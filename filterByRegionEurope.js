function filterByRegionEurope(countryArray) {
  return countryArray.filter(country => country.region === "Europe")
}
module.exports = filterByRegionEurope;