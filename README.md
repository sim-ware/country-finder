# country-finder
A simple node.js and HTML/ES6 app to fetch countries from `http://restcountries.eu/`


### CheckList
* ~~npm init w/ package.json~~
* ~~install axios~~
* ~~commit .sh of example curl request 200 to `https://restcountries.eu/rest/v2/all`~~
* ~~install Jest as dev dependency and scaffold simple 'sum' example test~~
* ~~capture and return curl request in axios~~
* ~~create ability to run `index.js` with command line argument~~
* ~~create subset of returned data from `test.sh` to test with~~
* ~~use example `sum` test to scaffold function that inserts inputString into `https://restcountries.eu/rest/v2/name/{name}`, replacing `{name}`~~
* ~~use that test and function to scaffold new function that only returns countries with region value "Europe"~~
* ~~new test and function to reduce the response to just countryName and capitalCity~~
* ~~write that to a JSON file, with the filename of the input, e.g. `./united.json`~~
* create `index.html`
* create text field and go button
* on 'go' press, log text field input
* create dummy UL below

#### TODOS
* ~~test axios request with error handling~~
* ~~move spec files into spec folder~~
* ~~extract `axiosGetRequest` function from index & test~~
* ~~Handle CLI arg - check for only one, is string, otherwise stop and prompt user to run again with correct arg -> extract all this into a function~~
* ~~when I run with `node index.js test` it trips things up - why?~~
* ~~combine the functions into one utils folder~~
