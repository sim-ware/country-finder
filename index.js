const formatUrl = require('./formatUrl')
const filterByRegionEurope = require('./filterByRegionEurope')
const axiosGetRequest = require('./axiosGetRequest')
const checkCliArg = require('./checkCliArg')
const mapToNameAndCapital = require('./mapToNameAndCapital')


async function run() {
  const cliArg = process.argv.slice(2)
  const cliCheck = checkCliArg(cliArg)

  if (!cliCheck) {
    console.error('Sorry - we can only accept a Single String argument of a Country Name or Partial.')
    return
  }

  const url = formatUrl('https://restcountries.eu/rest/v2/name/', cliArg)
  const data = await axiosGetRequest(url)

  if (data.isAxiosError) {
    console.error(`Failed to find any matching countries with the argument: ${cliArg}`)
    return
  }

  const filteredByEuropeData = filterByRegionEurope(data)
  const mappedToNameAndCapital = mapToNameAndCapital(filteredByEuropeData)

  console.log('cliArg: ',                 cliArg);
  console.log('Request URL: ',            url);
  console.log('data: ',                   data);
  console.log('filteredByEuropeData: ',   filteredByEuropeData);
  console.log('mappedToNameAndCapital: ', mappedToNameAndCapital);
}

run()