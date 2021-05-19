const dataBaseFunctions = require('./db.js');

const getArticles = dataBaseFunctions.getArticles;


/*
 * Retrieves all sites from which articles where crawled
 */
const getSites = async () => {
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


/*
 * Logs all sites from which articles where crawled, or sites from which articles are missing, or both
 * Parameters:
 *  - sitesBool (boolean): If true, it logs the sites from which articles were crawled
 *  - missingSitesBool (boolean): If true, it logs the sites from which articles are missing
 */
const logSites = async (sitesCrawled, sitesBool, missingSitesBool) => {
  const sitesWithArticles = await getSites();

  if (sitesBool) {
    console.log(sitesWithArticles);

    return sitesWithArticles;
  } else if (missingSitesBool) {
    const sitesWithoutArticles = [];

    sitesCrawled.forEach((site) => {
      if (!sitesWithArticles.includes(site)) {
        sitesWithoutArticles.push(site);
      }
    })

    return sitesWithoutArticles;
  }
}

// logSites();

module.exports = {
  logSites: logSites,
};
