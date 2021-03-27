const axios = require('axios');

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
module.exports = requestRestCountriesApi;

requestRestCountriesApi('https://restcountries.eu/rest/v2/all')