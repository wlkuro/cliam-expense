/* 
 * params : 
 * to : str ,
 * from : str
 * 
 * return :
 * [
 *  { price : str },
 *  { via : [ str, str ] or null }
 * ]
 * When there is no data, return null.
 */
const puppeteer = require('puppeteer');
const express = require('express');
const router = express.Router();

async function yahooTransitScraping(to, from){
    !(async() => {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage() 

            await page.goto('https://transit.yahoo.co.jp/')
            
            await page.type('input[name="from"]', from)
            await page.type('input[name="to"]', to )
    
            await page.click('#searchModuleSubmit')
            await page.waitForNavigation()
            await page.click('.current')
            await page.waitForNavigation()

            await page.screenshot({path: 'example.png'})
            browser.close()
            return 
            
        }catch(err){
            browser.close()
            console.error(err)
        }
    })()
}

router.get('/getRouteData', async(req, res) => {
    res.send('Hello');
    const to = '横浜';
    const from = '恵比寿';
    const returnData = yahooTransitScraping(to, from)
    
    res.send(returnData)
});

module.exports = router;


// async function getViaStationData(page){
//     const viaStationSelector = "#route01 > .routeDetail > .fareSection > .station > dl > dt";
//     return 
// }

// async function getRoutePriceData(page){
//     const routePrice = "#route01 > .routeSummary > .fare > .mark";
//     // return await page.$eval(routePrice, )
// }

// router.get('/getRouteData', (req, res) => {
//     res.send('This is INDEX.');
//     const to = '横浜';
//     const from = '恵比寿';

//     // const to = req.query.to;
//     // const from = req.query.from;

//     const returnData = yahooTransitScraping(to, from)
//     res.send(returnData)
//     return 
// });

// module.exports = router;
