const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const dataBaseFunctions = require('./db.js');
const getCrawlInfo = dataBaseFunctions.getCrawlInfo;
const storeArticle = dataBaseFunctions.storeArticle;

//newspage: address of the website
//articleContainer: Contains both the headline and the link
//headlineElement: Contains the headline text
//hrefElement: Contains the link to the full article
const crawl = async (site, newspage, articleContainer, headlineElement, hrefElement) => {
    const headlessBrowser = await puppeteer.launch({
      headless: false,
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
    console.log(articles);
    return articles;
}

// Function that crawls all websites defined inside the function
const crawlAll = () => {
  const site = [
    'fcbayern.com',
    'dierotenbullen.com',
    'bvb.de',
    'borussia.de',
    // 'bayer04.de', // AngularJS website doesn't work so far
    'schalke04.de',
  ];

  site.forEach(async (element, index) => {
    const info = await getCrawlInfo(element);
    const articles = await crawl(info.site, info.newspage, info.article_container, info.headline_element, info.href_element);

    const tStamp = Math.round(new Date().getTime() / 1000);

    articles.site.forEach((element, index) => {
      const site = articles.site[index];
      const headline = articles.headlines[index];
      const href = articles.hrefs[index];

      storeArticle(tStamp, site, headline, href);
    })
  })
}

// crawlAll();

module.exports = {
  crawlAll: crawlAll
}
