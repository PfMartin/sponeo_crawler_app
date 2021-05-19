const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const dataBaseFunctions = require('./db.js');
const getCrawlInfo = dataBaseFunctions.getCrawlInfo;
const storeArticle = dataBaseFunctions.storeArticle;

const sitesCheck = require('./sites_check.js');
const logSites = sitesCheck.logSites;

//newspage: address of the website
//articleContainer: Contains both the headline and the link
//headlineElement: Contains the headline text
//hrefElement: Contains the link to the full article
const crawl = async (site, newspage, articleContainer, headlineElement, hrefElement) => {
    console.log(`Crawling: ${site}`)
    const headlessBrowser = await puppeteer.launch({
      headless: true,
    });
    headlessBrowser.on('diconnected', () => {
      console.log('Browser closed');
    });

    let $;
    let page;
    let articles = {
      site: [],
      headlines: [],
      hrefs: []
    }

    try {
        page = await headlessBrowser.newPage();
        await page.goto(newspage, {
            waitUntil: 'load',
            timeout: 30000
        });
        let content = await page.content();
        $ = await cheerio.load(content);

        let breakFlag = true;

        $(articleContainer).each((index, element) => {
          articles.site.push(site);
          // Search inside the article container for the headlineElement, get the text of it, trim the text and push it to the list of headlines
          articles.headlines.push($(element).find(headlineElement).text().trim());
          // Search for the hrefElement and push it to the list of hrefs
          let href = '';

          if(hrefElement === '') { //href is directly in articleContainer element
            href = $(element).attr('href');
          } else { //href is in some child element
            href = $(element).find(hrefElement).attr('href');
          }

          // Logic for unified hrefs
          // Check if the href doesn't include the domain name -> If true add https://www.domainname
          // Check if href doesn't include www. -> If true add https://www. and cut the https:// from the original href
          if(!href.includes(articles.site[index])) {
            href = `https://www.${articles.site[index]}${href}`;
          } else if(!href.includes('www.')) {
            href = `https://www.${href.slice(8)}`;
          }

          articles.hrefs.push(href);

          // Break out from cheerio's each loop
          if(articles.hrefs.length > 4) {
            breakFlag = false;
          }

          return breakFlag;
        })
    } catch(err) {
        console.error(err.message);
    }

    headlessBrowser.close();
    return articles;
}

const saveArticles = (articles) => {
  const tStamp = Math.round(new Date().getTime() / 1000);

  articles.site.forEach((element, index) => {
    const site = articles.site[index];
    const headline = articles.headlines[index];
    const href = articles.hrefs[index];

    storeArticle(tStamp, site, headline, href);
    console.log(`${new Date(tStamp)}: ${site}, ${headline}, ${href}\n`);
  })

}

// Function that crawls all websites defined inside the function
const crawlAll = async () => {
  let sites = [
    'fcbayern.com',
    'dierotenbullen.com',
    'bvb.de',
    'borussia.de',
    'bayer04.de',
    'schalke04.de',
    'tsg-hoffenheim.de',
    'scfreiburg.com',
    'vfl-wolfsburg.de',
    'fcaugsburg.de',
    'profis.eintracht.de',
    'fc-union-berlin.de',
    'herthabsc.com',
    'fc.de/',
    'werder.de',
    'f95.de/',
    'scp07.de',
    'hsv.de',
    'vfb.de',
    'sgf1903.de',
    'fc-heidenheim.de',
    'fc-erzgebirge.de/',
    'ssv-jahn.de/',
    vfl.de,
    'holstein-kiel.de',
    'svs1916.de',
    'sv98.de/',
    'fcstpauli.com',
    'fcn.de/',
    'hannover96.de/',
    'svww.de',
    'vfl-bochum.de',
    'ksc.de',
    'dynamo-dresden.de/',
    'fcingolstadt.de',
    'tsv1860.de',
    'eintracht.com',
    'fck.de',
    'mainz05.de', // 2021-05-19 didn't work
    'arminia.de', // 2021-05-19 didn't work
  ];

  let crawlTries = 0;

  while (sites.length && crawlTries < 5) {
    console.log(`Try number: ${crawlTries}`)

    // for of for concurrent crawling
    // forEach for asynchronous crawling
    for (site of sites) {
      const info = await getCrawlInfo(site);
      const articles = await crawl(info.site, info.newspage, info.article_container, info.headline_element, info.href_element);
      await saveArticles(articles);
    }

    sites = await logSites(sites, false, true);
    console.log(`Sites I couldn't crawl: ${sites}`)

    crawlTries++;
  }

}

module.exports = {
  crawlAll: crawlAll
}
