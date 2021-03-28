const axios = require('axios');
const fs = require('fs')


const checkCliArg = (cliArg) => {
  if (cliArg.length > 1) return false;
  if (typeof cliArg[0] !== 'string') return false;
  return true;
}

const formatUrl = (rootUrl, inputString) => {
  return rootUrl + inputString;
}

const axiosGetRequest = async (url) => {
  let data;
  try {
    const response = await axios.get(url);
    data = response.data
  } catch (error) {
    data = error
  }

  return data
}

const filterByRegionEurope = (countryArray) => {
  return countryArray.filter(country => country.region === "Europe")
}

const mapToNameAndCapital = (countryData) => {
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