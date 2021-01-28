const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const dataBaseFunctions = require('./db.js');
const getCrawlInfo = dataBaseFunctions.getCrawlInfo;

// const databaseFunctions = require('./db.js');
// const getCrawlInfo = dataBaseFunctions.getCrawlInfo;

//newspage: address of the website
//articleContainer: Contains both the headline and the link
//headlineElement: Contains the headline text
//hrefElement: Contains the link to the full article
const crawl = async (institution, newspage, articleContainer, headlineElement, hrefElement) => {
    const headlessBrowser = await puppeteer.launch({
      headless: false,
    });
    headlessBrowser.on('diconnected', () => {
      console.log('Browser closed');
    });

    let $;
    let page;
    let articles = {
      institution: [],
      titles: [],
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
          articles.institution.push(institution);
          // Search inside the article container for the headlineElement, get the text of it, trim the text and push it to the list of titles
          articles.titles.push($(element).find(headlineElement).text().trim());
          // Search for the hrefElement and push it to the list of hrefs
          if(hrefElement === '') { //href is directly in articleContainer element
            articles.hrefs.push($(element).attr('href'));
          } else {                //href is in some child element
            articles.hrefs.push($(element).find(hrefElement).attr('href'));
          }

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

const logging = () => {
  console.log('Import worked');
}

const crawlAll = () => {
  const institutions = ['FC Bayern Muenchen', 'RB Leipzig'];

  institutions.forEach(async (element, index) => {
    const info = await getCrawlInfo(element);
    const articles = await crawl(info.institution, info.newspage, info.article_container, info.headline_element, info.href_element);

    console.log(articles);
  })
}

crawlAll();

module.exports = {
  crawl: crawl,
  logging: logging,
}
