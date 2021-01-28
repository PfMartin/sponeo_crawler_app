const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  database: 'sponeo'
});

const addWebsite = (site, homepage, newspage, category, sports, geo, article_container, headline_element, href_element) => {
  pool.query('INSERT INTO websites (site, homepage, newspage, category, sports, geo, article_container, headline_element, href_element) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [site, homepage, newspage, category, sports, geo, article_container, headline_element, href_element]);
};

const getCrawlInfo = async (site) => {
  const website = await pool.query('SELECT * FROM websites WHERE site = $1', [site]);
  const rows = await website.rows[0];

  return rows;
}

const storeArticle = (tStamp, site, headline, href) => {
  pool.query('INSERT INTO articles (t_stamp, site, headline, href) VALUES (TO_TIMESTAMP($1), $2, $3, $4) RETURNING *', [tStamp, site, headline, href]);

  console.log(`${new Date(tStamp)}: ${site}, ${headline}, ${href}\n`);

}


module.exports = {
  addWebsite: addWebsite,
  getCrawlInfo: getCrawlInfo,
  storeArticle: storeArticle
};
