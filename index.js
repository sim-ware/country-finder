const axios = require('axios');
const formatUrl = require('./formatUrl')
const filterByRegionEurope = require('./filterByRegionEurope')

const rootUrl = 'https://restcountries.eu/rest/v2/name/'

async function requestRestCountriesApi(url) {
  let data;

  try {
    const response = await axios.get(url);
    data = response.data
  } catch (error) {
    data = error
  }

  return data
}

async function run() {
  const countryNameOrPartial = process.argv.slice(2)
  const url = formatUrl(rootUrl, countryNameOrPartial)
  const data = await requestRestCountriesApi(url)
  const filteredByEuropeData = filterByRegionEurope(data)

  console.log('country name (or partial): ', countryNameOrPartial);
  console.log('Request URL: ',               url);
  console.log('data: ',                      data);
  console.log('filteredByEuropeData: ',      filteredByEuropeData);
}

run()