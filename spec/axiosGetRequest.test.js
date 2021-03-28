const axiosGetRequest = require('../axiosGetRequest');

test('checks Axios GET Requests succeed and handle failures', async () => {
  jest.setTimeout(15000);
  const dataOk = await axiosGetRequest('https://restcountries.eu/rest/v2/all')
  const dataFail = await axiosGetRequest('https://restcountries.eu/rest/v2/fail')

  expect(dataOk.isAxiosError).toBe(undefined);
  expect(dataFail.isAxiosError).toBe(true);
});