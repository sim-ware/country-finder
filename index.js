const axios = require('axios');
const formatUrl = require('./formatUrl')
const filterByRegionEurope = require('./filterByRegionEurope')


async function axiosGetRequest(url) {
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
  const url = formatUrl('https://restcountries.eu/rest/v2/name/', countryNameOrPartial)
  const data = await axiosGetRequest(url)
  const filteredByEuropeData = filterByRegionEurope(data)

  console.log('country name (or partial): ', countryNameOrPartial);
  console.log('Request URL: ',               url);
  console.log('data: ',                      data);
  console.log('filteredByEuropeData: ',      filteredByEuropeData);
}

run()