const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

// const databaseFunctions = require('./db.js');
// const getCrawlInfo = dataBaseFunctions.getCrawlInfo;

//newspage: address of the website
//articleContainer: Contains both the headline and the link
//headlineElement: Contains the headline text
//hrefElement: Contains the link to the full article
const crawl = async (newspage, articleContainer, headlineElement, hrefElement) => {
    const headlessBrowser = await puppeteer.launch({
      headless: false,
    });
    headlessBrowser.on('diconnected', () => {
      console.log('Browser closed');
    });

    let $;
    let page;
    let articles = {
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
        $(articleContainer).each((index, element) => {
          //Search inside the article container for the headlineElement, get the text of it, trim the text and push it to the list of titles
          articles.titles.push($(element).find(headlineElement).text().trim());
          //Search for the hrefElement and push it to the list of hrefs
          if(hrefElement === '') { //href is directly in articleContainer element
            articles.hrefs.push($(element).attr('href'));
          } else {                //href is in some child element
            articles.hrefs.push($(element).find(hrefElement).attr('href'));
          }
        })

    } catch(err) {
        console.error(err.message);
    }

    // console.log(articles.titles);
    // console.log(articles.hrefs);

    headlessBrowser.close();

    return articles;
}

// crawl('https://fcbayern.com/de/news', 'a.text-teaser.news-overview-teaser.type-grid', 'div.header5', 'href');

const logging = () => {
  console.log('Import worked');
}

module.exports = {
  crawl: crawl,
  logging: logging,
}
