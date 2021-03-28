const axios = require('axios');

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

module.exports = axiosGetRequest;