TimeStamp Microservice
==========================

Pass either a unix timestamp or natural language date with the URL.

The api will return both the timestamp and date


Example Usage
------------

`https://[url]/December%2015,%202015`

`https://[url]/1450137600`

Example Output
------------

`{ "unix": 1450137600, "natural": "December 15, 2015" }`
