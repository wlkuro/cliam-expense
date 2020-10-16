// const express = require('express');
// const app = express();

// const getRouteData = require('./getRouteData');
// app.get("/getRouteData", getRouteData.init)

// module.exports = {
//     path: '/api',
//     handler: app
// }
const express = require('express');
const app = express();

app.get("/test", (req, res) => {
  res.send("API server works fine");
})

const getRouteData = require('./getRouteData');
app.get("/getRouteData", getRouteData)


module.exports = {
  path: '/api',
  handler: app
}