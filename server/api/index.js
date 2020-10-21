
const express = require('express');
const app = express();

app.get("/test", (req, res) => {
  res.send("API server works fine");
})

const getRouteData = require('./getRouteData');
app.get('/getRouteData', async(req, res) => {
    const to = req.query.to;
    const from = req.query.from;
    
    const routeData = await getRouteData.yahooTransitScraping(from, to)
    res.send(routeData)
})

module.exports = {
  path: '/api',
  handler: app
}