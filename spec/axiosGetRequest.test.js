const axiosGetRequest = require('../axiosGetRequest');

test('checks Axios GET Requests succeed and handle failures', async () => {
  //   const exampleJson = [
  //     { region:   "Africa" },
  //     { region: "Americas" },
  //     { region:     "Asia" },
  //     { region:   "Europe" },
  //     { region:   "Europe" },
  //     { region:   "Africa" },
  //   ]
  
  // const data = await axiosGetRequest('https://restcountries.eu/rest/v2/all')
  const data = await axiosGetRequest('https://restcountries.eu/rest/v2/fail')

  expect(data.isAxiosError).toBe(true);
});