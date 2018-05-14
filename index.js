const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const viewport = {width:1440,height:1080};
  page.setViewport(viewport);
  await page.goto('https://guides.service.gov.au');
  await page.screenshot({path: 'output/output.png',fullPage: true});

  await browser.close();
})();