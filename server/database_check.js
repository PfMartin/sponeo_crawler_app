const dataBaseFunctions = require('./db.js');

const getArticles = dataBaseFunctions.getArticles;

const logArticles = async () => {
  const articles = await getArticles();

  let sites = [];

  // Pushes the site to the array, if it's not already in the array
  articles.rows.forEach((article) => {
    if (!sites.includes(article.site)) {
      sites.push(article.site);
    }
  })

  return sites;
}

const printWebsites = async () => {
  const sitesWithArticles = await logArticles();
  console.log(sitesWithArticles);
}

printWebsites();
