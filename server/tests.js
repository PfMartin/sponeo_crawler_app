const crawler = require('./crawler.js');

const crawl = crawler.crawl;
const logging = crawler.logging;

const hackerNews = {
  newsPage: 'http://news.ycombinator.com/',
  headlineElement: 'a.storylink',
  hrefElement: 'href'
}

const fcbayern = {
  newsPage: 'https://fcbayern.com/de/news#',
  articleContainer: 'a.text-teaser.news-overview-teaser',
  headlineElement: 'div.text-content div.header5',
  hrefElement: 'href'
}





// crawl(hackerNews.newsPage, hackerNews.headlineElement, hackerNews.hrefElement);
crawl(fcbayern.newsPage, fcbayern.articleContainer, fcbayern.headlineElement, fcbayern.hrefElement);
