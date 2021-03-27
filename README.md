# country-finder
A simple node.js and HTML/ES6 app to fetch countries from `http://restcountries.eu/`


# CheckList
* ~~npm init w/ package.json~~
* ~~install axios~~
* ~~commit .sh of example curl request 200 to `https://restcountries.eu/rest/v2/all`~~
* ~~install Jest as dev dependency and scaffold simple 'sum' example test~~
* create subset of returned data from `test.sh` to test with
* use example `sum` test to scaffold function that inserts inputString into `https://restcountries.eu/rest/v2/name/{name}`, replacing `{name}`
* use that test and function to scaffold new function that only returns countries with region value "Europe"