const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  database: 'sponeo'
});

const addWebsite = (institution, homepage, newspage, category, sports, geo, article_container, headline_element, href_element) => {
  pool.query('INSERT INTO websites (institution, homepage, newspage, category, sports, geo, article_container, headline_element, href_element) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [institution, homepage, newspage, category, sports, geo, article_container, headline_element, href_element]);
};

const getCrawlInfo = async (institution) => {
  const website = await pool.query('SELECT * FROM websites WHERE institution = $1', [institution]);
  const rows = await website.rows[0];

  return rows;
}

const storeArticle = (tStamp, institution, headline, href) => {
  pool.query('INSERT INTO articles (t_stamp, institution, headline, href) VALUES (TO_TIMESTAMP($1), $2, $3, $4) RETURNING *', [tStamp, institution, headline, href]);

  console.log(`${tStamp}: ${institution}, ${headline}, ${href}`);

}


module.exports = {
  addWebsite: addWebsite,
  getCrawlInfo: getCrawlInfo,
  storeArticle: storeArticle
};
