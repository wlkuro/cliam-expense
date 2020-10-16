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
const router = require('express');
const puppeteer = require('puppeteer');

async function getViaStationData(page){
    const viaStationSelector = "#route01 > .routeDetail > .fareSection > .station > dl > dt";
    return 
}

async function getRoutePriceData(page){
    const routePrice = "";
    return 
}

const yahooTransitScraping = function(page, to, from){
    !(async() => {
        try {
            await page.goto('https://transit.yahoo.co.jp/')
            
            await page.type('input[name="from"]', from)
            await page.type('input[name="to"]', to )
    
            await page.click('#searchModuleSubmit')
            await page.waitForNavigation()
            await page.click('.current')
            await page.waitForNavigation()

            await page.screenshot({path: 'example.png'})
            return 
        }catch(err){
            console.error(err)
        }
    })()
}

router.get('/getRouteData',async function (req, res) {
    const to = '横浜';
    const from = '恵比寿';

    // const to = req.query.to;
    // const from = req.query.from;

    const browser = await puppeteer.launch()
    const page = await browser.newPage() 

    const returnData = yahooTransitScraping(page, to, from)

    browser.close()
    res.send(returnData)
})
export default router