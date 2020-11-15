const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

console.log('Package setup done');

const crawl = async (browser) => {
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
        await page.goto('https://news.ycombinator.com', {
            waitUntil: 'load',
            timeout: 30000
        });
        let content = await page.content();
        $ = await cheerio.load(content);
        $('a.storylink').each((index, element) => {
          titles.push($(element).text().trim());
          hrefs.push($(element).attr('href'));
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
