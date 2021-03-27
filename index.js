const axios = require('axios');

var myArgs = process.argv.slice(2);
console.log('argument of a country name (or partial): ', myArgs);

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

requestRestCountriesApi('https://restcountries.eu/rest/v2/all')