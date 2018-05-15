const datasource = require("./data.js");
const data = datasource.getsitedata();

const puppeteer = require('puppeteer');

// macbook pro 15"
const viewport = {width:1440,height:1080};

// make the output directory if it's not there
const fs = require('fs');
const dir = 'output/';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// puppeteer routine
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.setViewport(viewport);

  // login u: guides/p: guides staging password
  await page.authenticate({username:"guides", password:"guides"});

  // set the domain (test,stage,prod)
  // do not add a trailing slash
  const env = 'https://service-manual-test-staging.apps.y.cld.gov.au';

  //////////////////////////////////////////////////
  //
  //     Screenshot every published page  📸 
  //
  //////////////////////////////////////////////////

  for (let i = 0; i < data.pages.length; i++) {
    await page.goto(env + data.pages[i].path);
    await page.screenshot({path: 'output/'+ i +'-'+ data.pages[i].name + '.png',fullPage: true});
    console.log("📸 Snapped a screenshot of " + env + data.pages[i].path);
  }



  //////////////////////////////////////////////////
  await browser.close();
})();