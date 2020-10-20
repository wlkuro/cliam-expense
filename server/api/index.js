
const express = require('express');
const app = express();

app.get("/test", (req, res) => {
  res.send("API server works fine");
})

const getRouteData = require('./getRouteData');
app.get('/getRouteData', async(req, res) => {
    // const to = req.query.to;
    // const from = req.query.from;
    const from = '横浜';
    const to = '恵比寿';
    
    const image = await getRouteData.yahooTransitScraping(from, to)
    res.send(image)
})

module.exports = {
  path: '/api',
  handler: app
}