const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://guides.service.gov.au');
  await page.screenshot({path: 'output.png'});

  await browser.close();
})();