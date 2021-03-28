function mapToNameAndCapital(countryData) {
  return countryData.map((country) => {
    return {
      countryName: country.nativeName,
      capitalCity: country.capital
    }
  })
}

module.exports = mapToNameAndCapital;