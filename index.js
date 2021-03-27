const axios = require('axios');
const formatUrl = require('./formatUrl')
const filterByRegionEurope = require('./filterByRegionEurope')

const rootUrl = 'https://restcountries.eu/rest/v2/name/'

async function requestRestCountriesApi(url) {
  // Make a request for a user with a given ID
  const test = await axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

async function run() {
  const countryNameOrPartial = process.argv.slice(2)
  const url = formatUrl(rootUrl, countryNameOrPartial)

  console.log('country name (or partial): ', countryNameOrPartial);
  console.log('Request URL: ',               url);

  requestRestCountriesApi(url)
}

run()