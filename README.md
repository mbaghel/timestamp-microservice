TimeStamp Microservice
==========================

Pass either a unix timestamp or natural language date with the URL.

The api will return a JSON object containing both timestamp and date.


Example Usage
------------

`https://[url]/December%2015,%202015`

`https://[url]/1450137600`

Example Output
------------

`{ "unix": 1450137600, "natural": "December 15, 2015" }`

Running Locally
------------
\(requires Node.js and npm [Downloading & installing](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)\)
* Clone repository or download and unzip
* install dependencies by running `npm install`
* run server with `npm run start`
* you will see a message with your port number
* visit localhost:PORT in the browser
