// server.js
// where your node app starts

// init project
const strftime = require('strftime')
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// routing for if time provided
app.get("/:time", (req, res) => {
  const time = req.params.time;
  const timeNum = +time;
  let date;
  
  // check if unix timestamp or string provided
  if (isNaN(timeNum)) {
    date = new Date(time + ' GMT');
  } else {
    date = new Date(timeNum * 1000);
  }
  
  // provide default values to response object
  const resObj = {unix: null, natural: null};
                  
  // check if date is valid and update response values
  if (!isNaN(date.getTime())) {
    resObj.unix = (date.getTime() / 1000);
    resObj.natural = strftime('%B %e, %Y', date);
  }
  
  res.send(JSON.stringify(resObj));

})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
