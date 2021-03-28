const utils = require('./utils')


async function run() {
  const cliArg = process.argv.slice(2)
  const cliCheck = utils.checkCliArg(cliArg)

  if (!cliCheck) {
    console.error('Sorry - we can only accept a Single String argument of a Country Name or Partial.')
    return
  }

  const url = utils.formatUrl('https://restcountries.eu/rest/v2/name/', cliArg)
  const data = await utils.axiosGetRequest(url)

  if (data.isAxiosError) {
    console.error(`Failed to find any matching countries with the argument: ${cliArg}`)
    return
  }

  const filteredByEuropeData = utils.filterByRegionEurope(data)
  const mappedToNameAndCapital = utils.mapToNameAndCapital(filteredByEuropeData)
  utils.storeJsonData(mappedToNameAndCapital, `countryJson/${cliArg[0]}.json`)
}

run()