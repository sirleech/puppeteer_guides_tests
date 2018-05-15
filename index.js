const puppeteer = require('puppeteer');

// macbook pro 15"
const viewport = {width:1440,height:1080};

// the site data
const data = 
{
  pages: [
    { name: "index",            path: "/" },
    { name: "sitemap",          path: "/sitemap/" },
    { name: "privacystatement", path: "/privacy-statement/" },
    { name: "dss",              path: "/digital-service-standard/" },
    { name: "dss1",             path: "/digital-service-standard/1-understand-user-needs/" },
    { name: "dss2",             path: "/digital-service-standard/2-multidisciplinary-team/" },
    { name: "dss3",             path: "/digital-service-standard/3-agile-and-user-centred/" },
    { name: "dss4",             path: "/digital-service-standard/4-tools-and-systems/" },
    { name: "dss5",             path: "/digital-service-standard/5-make-it-secure/" },
    { name: "dss6",             path: "/digital-service-standard/6-consistent-and-responsive/" },
    { name: "dss7",             path: "/digital-service-standard/7-open-standards-and-common-platforms/" },
    { name: "dss8",             path: "/digital-service-standard/8-make-source-code-open/" },
    { name: "dss9",             path: "/digital-service-standard/9-make-it-accessible/" },
    { name: "dss10",            path: "/digital-service-standard/10-test-the-service/" },
    { name: "dss11",            path: "/digital-service-standard/11-measure-performance/" },
    { name: "dss12",            path: "/digital-service-standard/12-non-digital-experience/" },
    { name: "dss13",            path: "/digital-service-standard/13-encourage-use-of-the-digital-service/" }
  ]
}

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