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


module.exports = {
  addWebsite: addWebsite,
  getCrawlInfo: getCrawlInfo,
};
