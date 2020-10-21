/* 
 * params : 
 * to : str ,
 * from : str
 * 
 * return : json 
 * [
 *  { price : str },
 *  { via : [ str, str ] or null }
 * ]
 * When there is no data, return null.
 */
const puppeteer = require('puppeteer');

const getTextContent = async function (page, selector){
  let result;
  if( await page.$(selector).then(res => !!res) ){
    result = await page.$eval(selector, item => {
      return item.textContent || null;
    });
  }
  return result;
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
  
  const routePriceSelector = "#route02 > .routeSummary > dd > ul > .fare > .mark"
  const price = await getTextContent(page, routePriceSelector)
  console.log(price)
  if( price == null ) {
    browser.close()
    return null;
  }

  const viaStationSelector = "#route02 > .routeDetail > .fareSection > .station > dl > dt";
  const via = await getTextContent(page, viaStationSelector)
  const resultData = [
      { price }, 
      { via }
  ]

  browser.close()
  console.log(resultData)
  return resultData
}

module.exports = {
    yahooTransitScraping
}