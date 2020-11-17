const crawler = require('./crawler.js');
const crawl = crawler.crawl;
const logging = crawler.logging;

const dataBaseFunctions = require('./db.js');
const getCrawlInfo = dataBaseFunctions.getCrawlInfo;

const institutions = ['FC Bayern', 'Borussia Dortmund']

const printInfo = async () => {
  institutions.forEach(async (institution) => {
    const info = await getCrawlInfo(institution);
    const articles = await crawl(info.newspage, info.article_container, info.headline_element, info.href_element);

    console.log(articles);
  })
}

printInfo();
// crawl(bvb.newsPage, bvb.articleContainer, bvb.headlineElement, bvb.hrefElement);
