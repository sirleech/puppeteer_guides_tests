const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const viewport = {width:1440,height:1080};
  page.setViewport(viewport);

  // login u: guides/p: guides staging password
  await page.authenticate({username:"guides", password:"guides"});

  // set the domain (test,stage,prod)
  const env = 'https://service-manual-test-staging.apps.y.cld.gov.au/';

  //////////////////////////////////////////////////
  //
  //     Screenshot every published page  📸 
  //
  //////////////////////////////////////////////////

  await page.goto(env);
  await page.screenshot({path: 'output/001-homepage.png',fullPage: true});

  await page.goto(env + '/sitemap');
  await page.screenshot({path: 'output/002-sitemap.png',fullPage: true});
  
  await page.goto(env + '/privacy-statement/');
  await page.screenshot({path: 'output/003-privacystatement.png',fullPage: true});



  //////////////////////////////////////////////////
  await browser.close();
})();