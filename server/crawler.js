const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

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
    let titles = [];
    let hrefs = [];

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
          titles.push($(element).find(headlineElement).text().trim());
          //Search for the hrefElement and push it to the list of hrefs
          hrefs.push($(element).attr(hrefElement));
        })


    } catch(err) {
        console.error(err.message);
    }

    console.log(titles);
    console.log(hrefs);

    headlessBrowser.close();
}

// main = async () => {
//     const headlessBrowser = await startBrowser();
//     await crawl(headlessBrowser);
//     await headlessBrowser.close();
// }
//
// main();

const logging = () => {
  console.log('Import worked');
}

module.exports = {
  crawl: crawl,
  logging: logging,
}
