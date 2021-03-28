const axios = require('axios');
const fs = require('fs')


function checkCliArg(cliArg) {
  if (cliArg.length > 1) return false;
  if (typeof cliArg[0] !== 'string') return false;
  return true;
}

function formatUrl(rootUrl, inputString) {
  return rootUrl + inputString;
}

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

function filterByRegionEurope(countryArray) {
  return countryArray.filter(country => country.region === "Europe")
}

function mapToNameAndCapital(countryData) {
  return countryData.map((country) => {
    return {
      countryName: country.nativeName,
      capitalCity: country.capital
    }
  })
}

const storeJsonData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}


module.exports = {
  checkCliArg,
  formatUrl,
  axiosGetRequest,
  filterByRegionEurope,
  mapToNameAndCapital,
  storeJsonData,
};