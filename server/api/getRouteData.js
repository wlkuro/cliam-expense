/* 
 * params : 
 * to : str ,
 * from : str
 * 
 * return : json 
 * [
 *  { price : Num },
 *  { via : [ str, str ] or null }
 * ]
 * When there is no data, return null.
 */
const puppeteer = require('puppeteer');

async function getViaStation(page){
    const viaStationSelector = "#route02 > .routeDetail > .fareSection > .station > dl > dt";
    let data = null;
    if( await page.$(viaStationSelector).then(res => !!res) ){
        data = await page.$eval(viaStationSelector, item => {
        return item.textContent;
      });
    }
}

async function yahooTransitScraping(from, to){
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-dev-shm-usage'
      ]
    })
    const page = await browser.newPage()
    await page.goto('https://transit.yahoo.co.jp/')
  
    await page.type('input[name="from"]', from)
    await page.type('input[name="to"]', to )
    await page.select('select[name="s"]', '1')
  
    await page.click('#searchModuleSubmit')
    await page.waitForNavigation()
  
    await page.screenshot({path: 'example.png'})

    const via =  await getViaStation(page)
    const resultData = [
        {
            via
        }
    ]
  
    browser.close()
    console.log(resultData)
    return resultData
}

module.exports = {
    yahooTransitScraping
}