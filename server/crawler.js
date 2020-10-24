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

// const crawl = async (browser) => {
//     let page;

//     console.log(browser);

//     try {
//         page = await browser.newPage();
//         await page.goto('https://news.ycombinator.com', {
//             waitUntil: 'load',
//             timeout: 30000
//         });
//         let content = await page.content();
//         $ = cheerio.load(content);
//     } catch(err) {
//         console.error(err.message);
//     }

//     console.log($);
// }

main = async () => {
    const headlessBrowser = await startBrowser();

    console.log('Setup')
}

main();