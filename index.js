const axios = require('axios');
const formatUrl = require('./formatUrl')
const filterByRegionEurope = require('./filterByRegionEurope')
const axiosGetRequest = require('./axiosGetRequest')


async function run() {
  const countryNameOrPartial = process.argv.slice(2)
  const url = formatUrl('https://restcountries.eu/rest/v2/name/', countryNameOrPartial)
  const data = await axiosGetRequest(url)
  const filteredByEuropeData = filterByRegionEurope(data)

  console.log('country name (or partial): ', countryNameOrPartial);
  console.log('Request URL: ',               url);
  console.log('data: ',                      data);
  console.log('filteredByEuropeData: ',      filteredByEuropeData);
}

run()