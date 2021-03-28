const axios = require('axios');
const formatUrl = require('./formatUrl')
const filterByRegionEurope = require('./filterByRegionEurope')
const axiosGetRequest = require('./axiosGetRequest')
const checkCliArg = require('./checkCliArg')


async function run() {
  const cliArg = process.argv.slice(2)
  const cliCheck = checkCliArg(cliArg)

  if (!cliCheck) return

  const url = formatUrl('https://restcountries.eu/rest/v2/name/', cliArg)
  const data = await axiosGetRequest(url)
  const filteredByEuropeData = filterByRegionEurope(data)
  console.log('cliArg: ',               cliArg);
  console.log('Request URL: ',          url);
  console.log('data: ',                 data);
  console.log('filteredByEuropeData: ', filteredByEuropeData);
}

run()