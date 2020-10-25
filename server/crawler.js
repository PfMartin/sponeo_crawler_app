const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

console.log('Package setup done');

const startBrowser = async () => {
    const headlessBrowser = await puppeteer.launch({
        headless: false
    });
    headlessBrowser.on('disconnected', () => {
        console.log('Browser closed');
    });

    return headlessBrowser;
};

const crawl = async (browser) => {
    let $;
    let page;
    let titles = [];
    let hrefs = [];

    try {
        page = await browser.newPage();
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
}

main = async () => {
    const headlessBrowser = await startBrowser();
    await crawl(headlessBrowser);
    await headlessBrowser.close();
}

main();
