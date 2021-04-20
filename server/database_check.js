const dataBaseFunctions = require('./db.js');

const getArticles = dataBaseFunctions.getArticles;

const logArticles = async () => {
  const articles = await getArticles();

  let sites = [];

  articles.rows.forEach((article) => {
    if (!sites.includes(article.site)) {
      sites.push(article.site);
    }
  })

  console.log(sites);
}

logArticles();
